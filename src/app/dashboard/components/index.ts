'use client'

import dynamic from 'next/dynamic'

// Charts are heavy (~70-100 kB each after gzip). Lazy-load them on first view to keep the main bundle small.
export const PerformanceChart = dynamic(() => import('./PerformanceChart').then(m => m.PerformanceChart), {
  ssr: false,
})
export const PerformanceBreakdownChart = dynamic(() => import('./PerformanceBreakdownChart').then(m => m.PerformanceBreakdownChart), {
  ssr: false,
})
export const CostCarbonChart = dynamic(() => import('./CostCarbonChart').then(m => m.CostCarbonChart), {
  ssr: false,
})

// Lightweight UI/table components can stay as direct imports.
export { HotspotsList } from './HotspotsList'
export { OptimizationMetrics } from './OptimizationMetrics'
export { OptimizationSuggestions } from './OptimizationSuggestions'
export { OptimizationHistory } from './OptimizationHistory' 