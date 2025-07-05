# Dashboard Implementation Plan

> This document outlines the end-to-end work required to deliver the interactive Dashboard UI found in `src/app/dashboard/page.tsx`.  It is organised page-by-page and feature-by-feature, and highlights how we will leverage the **Codex CLI** (OpenAI coding-agent runtime) throughout the build.

---

## 0 · Foundations & Conventions

1. **Tech Stack**  
   • Next.js (App Router, TypeScript, ES2022)  
   • Tailwind CSS + shadcn/ui for design system  
   • Recharts (or Visx/Chart.js) for data-viz  
   • zod + tRPC **or** REST (OpenAPI) for typed backend contracts  
   • NextAuth for authentication / RBAC  
   • Jest + React Testing Library for unit/UI tests  
   • Playwright for E2E flows  
   • ESLint + Prettier + Husky/lin-staged for quality gates
2. **Repository Structure Enhancements**  
   • `src/components` ⇒ shared primitives  
   • `src/features/<domain>` ⇒ feature-sliced directory per tab  
   • `src/server` ⇒ trpc / route handlers  
   • `src/lib/chart` ⇒ chart config helpers
3. **Codex CLI Workflow**  
   • Each task below includes a _"Codex prompt"_ suggestion.  
   • We will stream agent logs and interrupt/approve edits via CLI.

---

## 1 · Overview Tab (`value="overview"`)

| Feature | Description | Data/API | Tasks | Codex Prompt Snippet |
|---------|-------------|----------|-------|---------------------|
| KPI Cards | Four stat-cards (Active Hotspots, Performance Gain, Cost Savings, Success Rate) | `GET /metrics/kpi?period=30d` → `{activeHotspots:number,perfGain:number,costSavings:number,successRate:number}` | 1. Create `KpiCard` atom  2. Add SWR hook `useKpiMetrics()`  3. Animate value-up counts | "Create a reusable KPI Card component with gradient icon support…" |
| Performance Chart | Trend of perf scores/time | `GET /metrics/performance?range=90d` | 1. Build `PerformanceChart` w/ Recharts area-chart  2. Add tooltip + gradient fill  3. Loader/fallback states | "Generate a responsive AreaChart in Recharts that receives data:{date,value}[]…" |
| Hotspot Categories | Donut chart that can expand/collapse | `GET /hotspots/categories?range=30d` | 1. Build `PerformanceBreakdownChart`  2. Manage `isHotspotExpanded` state & CSS grid transition  3. Add accessible button to trigger expand | "Implement a DonutChart that toggles between compact and expanded layout…" |

### Acceptance
- Lazy-load heavy charts (`next/dynamic`)  
- Animate colour transitions on hover  
- All content keyboard navigable & screen-reader labelled

---

## 2 · Hotspots Tab (`value="hotspots"`)

| Feature | Description | Data/API | Tasks |
|---------|-------------|----------|-------|
| Summary Cards | In Progress, Completed, High Priority, Avg Resolution | `GET /hotspots/summary` | Build cards via `KpiCard` w/ discrete colour maps |
| Active Hotspot Investigations (Table) | Paginated sortable table; each row → details modal | `GET /hotspots?status=active&page=<n>` | 1. Create `HotspotsTable`  2. Add column sorting  3. Row click ⇒ `HotspotDrawer` w/ timeline |
| Suggested Optimizations | ML/LLM-generated suggestions list | `POST /optimizations/suggest {hotspotId}` | 1. Integrate Codex completion endpoint  2. Cache suggestions client-side  3. Allow "Apply" CTA |

### Acceptance
- Table virtualisation for >1k rows  
- Role-based buttons (`canApplyOptimization`)  
- ARIA attributes on drawers & dialogs

---

## 3 · Optimizations Tab (`value="optimizations"`)

| Feature | Description | Data/API | Tasks |
|---------|-------------|----------|-------|
| Summary Cards | Total Applied, Best Result, This Week, Top Category, Avg Impact | `GET /optimizations/summary` | Extend `KpiCard` colour palette |
| Optimization History (Chart) | Area/Bubble chart of impact over time | `GET /optimizations/history?range=180d` | Build stacked area-chart with filter chips |
| Recent Optimizations (Metrics list) | Scroll list with quick links | `GET /optimizations?limit=10&sort=desc` | Create `OptimizationMetrics` component |
| Optimization History Table | Data-grid with search, export | `GET /optimizations?page=<n>` | Utilise TanStack Table + CSV export util |

---

## 4 · Impact & Savings Tab (`value="impact"`)

| Feature | Description | Data/API | Tasks |
|---------|-------------|----------|-------|
| Summary Cards | Monthly Savings, CO₂ Reduction, Request Cost, Response Time | `GET /impact/summary` | Leverage existing card atom |
| Secondary Metrics | Active Runs, Token Spend, ROI, Trees Saved, Uptime | `GET /impact/secondary` | Ditto |
| Cost & Carbon Impact Chart | Combo line/area dual-axis chart | `GET /impact/cost-carbon?range=12mo` | 1. Dual-axis chart config  2. Toggle units (USD/kg) |

---

## 5 · Cross-Cutting Concerns

1. **State Management** – Prefer _server components_ for static data, SWR for live metrics; fallback loaders via React Suspense.
2. **Theming** – Tailwind dark palette already used; expose accent colour switcher.
3. **Error Handling** – Toast on recoverable errors; dedicated `ErrorBoundary` per tab.
4. **Performance** – Code-split heavy charts; memoise pure components; use React-lazy and intersection observer.
5. **Accessibility** – Define focus rings, aria-labels, prefers-reduced-motion handling.
6. **Analytics** – Log tab switches & CTA clicks to Segment.
7. **CI/CD** – GitHub Actions: lint → test → build → preview deploy (Vercel).

---

## 6 · Quality Strategy

| Layer | Tooling | Coverage |
|-------|---------|----------|
| Unit | Jest, ts-jest | 90% critical paths |
| Component/Visual | Storybook + Chromatic | All atomic/molecular components |
| Integration | React Testing Library | Data hooks & forms |
| E2E | Playwright | Primary user journeys |

---

## 7 · Timeline (High-Level)

| Week | Milestones |
|------|-----------|
| 1 | Repo housekeeping, CI templates, create KPI Card atom, scaffold API routes |
| 2 | Overview tab charts, Hotspot summary cards |
| 3 | Hotspots table + drawer, Suggestion engine stub |
| 4 | Optimizations tab visuals + history table |
| 5 | Impact tab and dual-axis chart, accessibility pass |
| 6 | Polish, tests to target, tech-debt cleanup, launch 🚀 |

---

## 8 · Using Codex CLI Effectively

1. **Atomic Prompts** – Break prompts per component or hook; keep under 25 lines for best agent focus.
2. **Stream Monitoring** – Set `--stream` flag; if hallucination detected, `Ctrl-C` to abort and refine instructions.
3. **Edit Approval** – Use `codex apply` to stage diff; run lint/tests before commit.
4. **Context Curation** – Feed agent only relevant files (e.g. component dir) to avoid token bloat.
5. **Iterative Loops** – Adopt _Red → Green → Refactor_ cycles with agent assistance.

---

## 9 · Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| API schema drift | Med | High | Contract tests + `zod` parsing |
| Chart perf on low-end devices | Med | Med | Canvas fallback + debounced resize |
| LLM hallucination | High | Med | Human-in-the-loop review before merge |
| Feature creep | Med | High | Freeze scope ‑ use this document as SSOT |

---

**End of Plan** 