'use client'

import { ScrollArea } from "@/app/client/components/ui/scroll-area"

type OptimizationMetric = {
  id: string
  timestamp: string
  type: string
  improvement: number
  details: string
}

const mockMetrics: OptimizationMetric[] = [
  {
    id: '1',
    timestamp: '2024-01-20 14:30',
    type: 'Algorithm',
    improvement: 75.0,
    details: 'Replaced nested loops with hash map lookup',
  },
  {
    id: '2',
    timestamp: '2024-01-20 14:15',
    type: 'Memory',
    improvement: 45.0,
    details: 'Implemented proper cleanup for event listeners',
  },
  {
    id: '3',
    timestamp: '2024-01-20 14:00',
    type: 'Network',
    improvement: 60.0,
    details: 'Added request caching and debouncing',
  },
  {
    id: '4',
    timestamp: '2024-01-20 13:45',
    type: 'CPU',
    improvement: 30.0,
    details: 'Optimized heavy computation with memoization',
  },
]

export function OptimizationMetrics() {
  return (
    <ScrollArea className="h-[300px] w-full pr-4">
      <div className="space-y-3">
        {mockMetrics.map((metric) => (
          <div
            key={metric.id}
            className="flex items-center justify-between space-x-4 rounded-lg bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 p-4 transition-all duration-300"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-200">
                  {metric.type}
                </p>
                <div className="text-sm font-semibold text-green-400">
                  +{metric.improvement}%
                </div>
              </div>
              <p className="text-sm text-gray-400">
                {metric.details}
              </p>
              <p className="text-xs text-gray-500">
                {metric.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
} 