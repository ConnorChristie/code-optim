Below is a design-level blueprint you can adapt as you turn **Code Optima** from a slide-deck idea into a production-ready, self-policing agent pipeline.

---

## 1. 30-000 ft architecture

```
┌──────────┐    ┌───────────┐   ┌───────────┐
│  Queue   ├──▶ │ Orchestr. │ ─▶│  Agents   │
└──────────┘    └────┬──────┘   └────┬──────┘
                     │               │
                     ▼               ▼
              Baseline Builder   Hot-spot Finder
                     │               │
                     ▼               ▼
               Patch Generator  ▶  Test Runner
                     ▲               │
                     └──── Metrics ◀─┘
```

* **Job Queue** – repo + config events land here.
* **Orchestrator** – a state-machine graph that fans out to agents, enforces budgets, and writes state to a backing store.
* **Agents** – small, role-based LLM workers (e.g., *Analyzer*, *Refactorer*, *Reviewer*).
* **Metrics Bus** – every step emits `progress`, `cost`, `delta_perf` events that power dashboards and guard-rails.

Frameworks that give you the orchestration primitives out-of-the-box:

* **LangGraph** – graph-based, stateful workflows; supports per-node timeouts, retries and conditional edges ([medium.com][1], [langchain-ai.github.io][2])
* **CrewAI** – opinionated “crew / role / task” wrapper around multi-agent collaboration ([medium.com][3], [crewai.com][4], [github.com][5])
* **OpenAI Autogen SDK ≥ 0.4** – ready-made “controller-agent” abstractions + tool-use examples ([mychen76.medium.com][6])

LangGraph (or CrewAI with a thin state-layer you write yourself) is usually the simplest way to embed explicit **terminal states** and **budget guards**.

---

## 2. Detailed pipeline stages & guard-rails

| Stage                        | Agent role(s)     | Success criterion                     | Guard-rail / terminal rule                  |
| ---------------------------- | ----------------- | ------------------------------------- | ------------------------------------------- |
| **1. Baseline build & test** | *Builder*         | All tests pass; perf metrics captured | Abort if tests fail > 2× or build > 30 min  |
| **2. Hot-spot detection**    | *Analyzer*        | ≤ 50 candidate functions ranked       | Timeout 3 min **or** token cost > \$0.10    |
| **3. Patch generation**      | *Refactorer*      | Produces syntactically valid diff     | Hard-stop at 5 patches **or** \$1.00        |
| **4. Compile + unit tests**  | *Builder*         | Green build in < 10 min               | Roll back patch on failure                  |
| **5. Perf regression test**  | *BenchmarkRunner* | ≥ X % faster *and* tests pass         | If Δ perf < target for 3 patches → terminal |
| **6. PR & human sign-off**   | *Reviewer*        | Generates GitHub PR + explanations    | End-of-run                                  |

A single job therefore reaches a **terminal state** when **any** of these is true:

1. **Budget ceiling** – total cost (tokens + CI minutes) hits user-defined limit.
2. **Max iterations** – default 5 successful build-test cycles.
3. **No incremental gain** – moving 7-day rolling average improvement < 1 %.
4. **Wall-clock TTL** – e.g., 2 hours.

---

## 3. How you keep agents from “going feral”

| Technique                          | Implementation tip                                                                                                                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Heartbeat + watchdog**           | Each agent thread/process publishes `heartbeat:<job_id>` every N seconds to Redis or NATS. A side-car kills tasks with stale heartbeats > 60 s.                                                                                                |
| **Token & call quotas**            | LangChain/LangGraph callbacks expose `llm_start` / `llm_end` hooks; accumulate `#tokens` & `$spent` in Prometheus and raise `BudgetExceeded` to flip the graph into its *abort* branch. ([python.langchain.com][7], [python.langchain.com][8]) |
| **State hashing / loop detection** | Persist `(agent_name, input_hash, output_hash)` tuples; if the same pair appears 3× → mark as *stuck* and cut branch.                                                                                                                          |
| **Adaptive step-down**             | Shrink the temperature / expand top-p only if the last turn produced no compile-ready code; otherwise converge.                                                                                                                                |
| **Human-in-the-loop checkpoints**  | Emit Slack/GitHub comment when either *cost > threshold* **or** *improvement < threshold*; require emoji approval to continue.                                                                                                                 |

---

## 4. Observability stack

| Layer        | Suggested tool                                                                          |
| ------------ | --------------------------------------------------------------------------------------- |
| **Metrics**  | Prometheus + Grafana (dashboards: `codeoptima_cost_usd`, `delta_perf_pct`, `agent_rps`) |
| **Tracing**  | OpenTelemetry + `trace_id` propagated through LangGraph nodes                           |
| **Logs**     | Loki or Elastic; tag by `job_id` + `agent`                                              |
| **Alerting** | Prometheus Alertmanager: *Budget 90 %*, *Heartbeat missed*, *CI quota left < 10 %*      |

---

## 5. Cost-control knobs you expose to users

| Knob                           | Default       | Effect                            |
| ------------------------------ | ------------- | --------------------------------- |
| **Max spend per repo / month** | \$10          | Hard cap across all jobs          |
| **Max concurrency**            | 2 jobs        | Queue depth limiter               |
| **Perf target (%)**            | 5 %           | “Stop early if not met”           |
| **Max wall-clock (h)**         | 2             | Ensures CI minutes aren’t gobbled |
| **LLM model tier**             | `gpt-4o-mini` | Cheaper but slower to converge    |

Expose these as Terraform-style `codeoptima.toml` entries or via dashboard sliders.

---

## 6. Putting it together—minimal code sketch (LangGraph)

```python
from langgraph import Graph, Node, events, guard

# 1. Graph definition
g = Graph()

# 2. Nodes
g.add(Node("baseline",   baseline_builder))
g.add(Node("analyze",    hotspot_agent,   timeout_s=180, cost_limit=0.10))
g.add(Node("patch",      refactor_agent,  max_runs=5,    cost_limit=1.00))
g.add(Node("compile",    compile_tests))
g.add(Node("benchmark",  benchmark_runner))
g.add(Node("terminal",   terminal_report))

# 3. Edges with guards
g.connect("baseline",  "analyze")
g.connect("analyze",   "patch")
g.connect("patch",     "compile")
g.connect("compile",   ["benchmark", "terminal"],   guard=events.on_build_fail)
g.connect("benchmark", ["analyze",   "terminal"],   guard=guard.converged)

# 4. Run
g.run(job_cfg, callbacks=[PromMetrics(), BudgetGuard()])
```

*(Pseudo-code—just shows how per-node timeouts and “converged” guard close loops.)*

---

### Key take-away

* Treat each optimisation run as a **state-machine with explicit exit arrows**.
* Instrument **everything**—cost, time, improvement—and wire those signals to guards that flip the graph into a terminal node when thresholds trip.
* Use off-the-shelf agent frameworks (LangGraph, CrewAI, Autogen) so you spend time on **domain logic (profiling & diff generation)**, not plumbing.

Follow this pattern and you’ll have a self-healing, budget-aware optimisation fleet that can churn through hundreds of repos without disappearing down an LLM rabbit-hole.

[1]: https://medium.com/%40danushidk507/ai-agents-xii-langgraph-graph-based-framework-b7b74e1fa5df?utm_source=chatgpt.com "AI Agents XII — LangGraph graph-based framework - Medium"
[2]: https://langchain-ai.github.io/langgraph/?utm_source=chatgpt.com "LangGraph"
[3]: https://medium.com/%40iamanraghuvanshi/agentic-ai-3-top-ai-agent-frameworks-in-2025-langchain-autogen-crewai-beyond-2fc3388e7dec?utm_source=chatgpt.com "Top AI Agent Frameworks in 2025: LangChain, AutoGen, CrewAI ..."
[4]: https://www.crewai.com/?utm_source=chatgpt.com "The Leading Multi-Agent Platform"
[5]: https://github.com/crewAIInc/crewAI?utm_source=chatgpt.com "crewAIInc/crewAI - GitHub"
[6]: https://mychen76.medium.com/creating-intelligent-agent-with-openai-agents-sdk-and-autogen-mcp-tools-and-memory-04f630eb6a73?utm_source=chatgpt.com "Creating Intelligent Agent with OpenAI Agents SDK and Autogen ..."
[7]: https://python.langchain.com/docs/concepts/callbacks/?utm_source=chatgpt.com "Callbacks - Python LangChain"
[8]: https://python.langchain.com/docs/integrations/callbacks/?utm_source=chatgpt.com "Callbacks - Python LangChain"
