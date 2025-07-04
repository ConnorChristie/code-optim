from typing import Dict, Any, Optional, List
from langgraph.graph import Graph, StateGraph
from langgraph.prebuilt import ToolExecutor
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from prometheus_client import Counter, Histogram, start_http_server
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
import time
import logging

from ..agents.base import AgentState
from ..agents.baseline_builder import BaselineBuilderAgent
from ..agents.codex_analyzer import CodexAnalyzerAgent
from ..agents.refactor import RefactorAgent
from .config import get_settings

# Configure logging
logger = logging.getLogger(__name__)

# Configure OpenTelemetry
trace.set_tracer_provider(TracerProvider())
tracer = trace.get_tracer(__name__)
otlp_exporter = OTLPSpanExporter(endpoint=get_settings().OTEL_ENDPOINT)
span_processor = BatchSpanProcessor(otlp_exporter)
trace.get_tracer_provider().add_span_processor(span_processor)

# Metrics
COST_COUNTER = Counter("codeoptima_cost_usd_total", "Total cost in USD")
PERF_IMPROVEMENT = Histogram(
    "codeoptima_perf_improvement_pct",
    "Performance improvement percentage",
    buckets=[1, 2, 5, 10, 20, 50]
)
AGENT_DURATION = Histogram(
    "codeoptima_agent_duration_seconds",
    "Time spent in each agent",
    labelnames=["agent_name"]
)

class OptimizationOrchestrator:
    def __init__(self):
        self.settings = get_settings()
        self.graph = self._build_graph()
        
        # Start Prometheus metrics server
        start_http_server(self.settings.PROMETHEUS_PORT)
    
    def _build_graph(self) -> StateGraph:
        # Initialize agents
        baseline = BaselineBuilderAgent()
        analyzer = CodexAnalyzerAgent()
        refactor = RefactorAgent()
        
        # Build graph
        graph = StateGraph(AgentState)
        
        # Add nodes with observability wrappers
        graph.add_node("baseline", self._wrap_agent(baseline))
        graph.add_node("analyze", self._wrap_agent(analyzer))
        graph.add_node("refactor", self._wrap_agent(refactor))
        graph.add_node("terminal", self._terminal_node)
        
        # Add edges with conditional routing
        graph.add_edge("baseline", "analyze")
        graph.add_edge("analyze", "refactor")
        graph.add_edge("refactor", "analyze")  # Loop back for multiple optimizations
        
        # Add conditional edges
        graph.add_conditional_edges(
            "analyze",
            self._route_after_analysis,
            {
                "refactor": "refactor",
                "terminal": "terminal"
            }
        )
        
        graph.add_conditional_edges(
            "refactor",
            self._route_after_refactor,
            {
                "analyze": "analyze",
                "terminal": "terminal"
            }
        )
        
        # Set entry point
        graph.set_entry_point("baseline")
        
        return graph.compile()
    
    def _wrap_agent(self, agent: Any):
        async def wrapped_agent(state: AgentState, **kwargs) -> Dict[str, Any]:
            with tracer.start_as_current_span(f"agent_{agent.name}") as span:
                start_time = time.time()
                
                try:
                    # Check budget
                    if state.cost_used >= self.settings.MAX_SPEND_PER_REPO:
                        span.set_attribute("termination_reason", "budget_exceeded")
                        return {"status": "terminal", "reason": "budget_exceeded"}
                    
                    # Process
                    result = await agent.process(state, **kwargs)
                    
                    # Update metrics
                    duration = time.time() - start_time
                    AGENT_DURATION.labels(agent_name=agent.name).observe(duration)
                    
                    if "cost" in result:
                        COST_COUNTER.inc(result["cost"])
                        span.set_attribute("cost", result["cost"])
                    
                    if "improvement_pct" in result:
                        PERF_IMPROVEMENT.observe(result["improvement_pct"])
                        span.set_attribute("improvement_pct", result["improvement_pct"])
                    
                    span.set_attribute("status", result.get("status", "unknown"))
                    return result
                    
                except Exception as e:
                    span.set_status(trace.Status(trace.StatusCode.ERROR, str(e)))
                    return {
                        "status": "failed",
                        "error": str(e),
                        "agent": agent.name
                    }
        
        return wrapped_agent
    
    async def _route_after_analysis(self, state: AgentState, result: Dict[str, Any]) -> str:
        """Determine next step after analysis"""
        if result.get("status") == "failed":
            return "terminal"
            
        hotspots = result.get("hotspots", [])
        if not hotspots:
            return "terminal"
            
        # Check if we've hit improvement target
        if state.improvement_pct >= self.settings.PERF_TARGET_PCT:
            return "terminal"
            
        # Check iteration limit
        if state.iterations >= 5:  # Max 5 optimization cycles
            return "terminal"
            
        return "refactor"
    
    async def _route_after_refactor(self, state: AgentState, result: Dict[str, Any]) -> str:
        """Determine next step after refactoring"""
        if result.get("status") == "failed":
            return "terminal"
            
        # Check if we've hit improvement target
        if state.improvement_pct >= self.settings.PERF_TARGET_PCT:
            return "terminal"
            
        # Check iteration limit
        if state.iterations >= 5:  # Max 5 optimization cycles
            return "terminal"
            
        # Continue optimization if changes were made
        changes = result.get("changes", [])
        return "analyze" if changes else "terminal"
    
    async def _terminal_node(self, state: AgentState) -> Dict[str, Any]:
        """Handle workflow completion"""
        with tracer.start_as_current_span("terminal") as span:
            span.set_attribute("total_cost", state.cost_used)
            span.set_attribute("total_time", state.time_used)
            span.set_attribute("improvement_pct", state.improvement_pct)
            
            return {
                "status": "completed",
                "final_state": state.dict(),
                "total_cost": state.cost_used,
                "total_time": state.time_used,
                "improvement": state.improvement_pct
            }
    
    async def run_optimization(self, repo_path: str) -> Dict[str, Any]:
        """Run the optimization workflow"""
        with tracer.start_as_current_span("optimization_workflow") as span:
            span.set_attribute("repo_path", repo_path)
            
            inputs = {
                "repo_path": repo_path,
                "job_id": f"job_{int(time.time())}"
            }
            
            try:
                result = await self.graph.ainvoke(inputs)
                span.set_attribute("status", "success")
                return result
            except Exception as e:
                span.set_status(trace.Status(trace.StatusCode.ERROR, str(e)))
                raise 