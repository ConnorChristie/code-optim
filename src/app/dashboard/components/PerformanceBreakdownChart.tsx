'use client'

import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

type HotspotData = {
  percentage: number
  timeSpent: string
  potentialSavings: string
  costPerMonth: string
}

const hotspotData: Record<string, HotspotData> = {
  CPU: {
    percentage: 25,
    timeSpent: '452ms',
    potentialSavings: '180ms',
    costPerMonth: '$240',
  },
  Memory: {
    percentage: 20,
    timeSpent: '320ms',
    potentialSavings: '140ms',
    costPerMonth: '$180',
  },
  'I/O': {
    percentage: 15,
    timeSpent: '280ms',
    potentialSavings: '120ms',
    costPerMonth: '$150',
  },
  Database: {
    percentage: 15,
    timeSpent: '240ms',
    potentialSavings: '160ms',
    costPerMonth: '$200',
  },
  Network: {
    percentage: 10,
    timeSpent: '180ms',
    potentialSavings: '80ms',
    costPerMonth: '$120',
  },
  Rendering: {
    percentage: 15,
    timeSpent: '220ms',
    potentialSavings: '100ms',
    costPerMonth: '$90',
  },
}

const data: ChartData<'pie'> = {
  labels: ['CPU', 'Memory', 'I/O', 'Database', 'Network', 'Rendering'],
  datasets: [
    {
      label: 'Hotspot Distribution',
      data: Object.values(hotspotData).map(d => d.percentage),
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)', // indigo-500
        'rgba(16, 185, 129, 0.8)', // emerald-500
        'rgba(251, 146, 60, 0.8)', // orange-400
        'rgba(59, 130, 246, 0.8)', // blue-500
        'rgba(236, 72, 153, 0.8)', // pink-500
        'rgba(20, 184, 166, 0.8)', // teal-500
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(20, 184, 166, 1)',
      ],
      borderWidth: 2,
    },
  ],
}

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 60,
      right: 60,
      bottom: 60,
      left: 60,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: '#e5e7eb',
      font: {
        size: 12,
        weight: 600,
      },
      formatter: (value: number, ctx: any) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return `${label}\n${value}%`;
      },
      anchor: 'end',
      align: 'end',
      offset: 10,
      clip: false,
      textAlign: 'center',
      backgroundColor: 'rgba(17, 24, 39, 0.9)',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      borderRadius: 6,
      borderWidth: 1,
      padding: {
        top: 6,
        right: 10,
        bottom: 6,
        left: 10,
      },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const hotspot = hotspotData[ctx.label]
          return [
            `${ctx.label}: ${hotspot.percentage}%`,
            `Time: ${hotspot.timeSpent}`,
            `Potential: ${hotspot.potentialSavings}`,
          ]
        },
      },
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      titleFont: {
        size: 13,
        weight: 600,
      },
      bodyFont: {
        size: 12,
      },
      bodySpacing: 6,
      padding: 12,
      borderColor: 'rgba(99, 102, 241, 0.2)',
      borderWidth: 1,
      titleColor: '#e5e7eb',
      bodyColor: '#9ca3af',
      boxPadding: 4,
      cornerRadius: 8,
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 750,
  },
  elements: {
    arc: {
      borderWidth: 2,
      borderColor: '#111827',
    },
  },
  onHover: (_event, activeElements) => {
    // Set cursor to pointer when hovering over pie slices
    const chartElement = _event?.native?.target as HTMLElement
    if (chartElement) {
      chartElement.style.cursor = activeElements.length > 0 ? 'pointer' : 'default'
    }
  },
}

type MetricItem = { name: string; value: string }
type SegmentDetail = {
  summary: string
  metrics: MetricItem[]
  code?: string
}

const segmentDetails: Record<string, SegmentDetail> = {
  CPU: {
    summary:
      'CPU-intensive tasks detected during analysis. Focus on optimizing heavy loops and computational hotspots.',
    metrics: [
      { name: 'Total CPU Time', value: '452 ms' },
      { name: 'Self Time', value: '320 ms' },
      { name: 'Top Function', value: 'processData (120 ms)' },
      { name: 'Calls', value: '1,540' },
    ],
    code: `function processData(items) {
  return items.reduce((acc, item) => {
    // heavy transformation
    return acc + expensiveWork(item)
  }, 0)
}`,
  },
  Memory: {
    summary: 'High allocation rate and peak memory usage observed.',
    metrics: [
      { name: 'Peak Memory', value: '85 MB' },
      { name: 'Allocations', value: '15,200' },
      { name: 'Potential Leak', value: '1.2 MB' },
    ],
    code: `const cache = new Map()
function fetchData(id) {
  if (!cache.has(id)) {
    cache.set(id, computeResult(id))
  }
  return cache.get(id)
}`,
  },
  'I/O': {
    summary: 'Disk reads are bottlenecking throughput.',
    metrics: [
      { name: 'Read Ops', value: '12,670' },
      { name: 'Avg Latency', value: '14 ms' },
      { name: 'Throughput', value: '220 MB/s' },
    ],
  },
  Database: {
    summary: 'Several queries exhibit long execution times; indexing recommended.',
    metrics: [
      { name: 'Slow Queries', value: '23' },
      { name: 'Longest Query', value: '840 ms' },
      { name: 'Avg Query Time', value: '240 ms' },
    ],
    code: `SELECT user_id, COUNT(*) FROM orders
GROUP BY user_id
ORDER BY COUNT(*) DESC;`,
  },
  Network: {
    summary: 'High latency detected for external API requests.',
    metrics: [
      { name: 'Requests', value: '4,300' },
      { name: 'Avg RTT', value: '180 ms' },
      { name: 'Failed', value: '1.4 %' },
    ],
  },
  Rendering: {
    summary: 'Excessive DOM updates leading to jank during scroll.',
    metrics: [
      { name: 'Repaints', value: '1,120' },
      { name: 'Layout Thrash', value: '560' },
      { name: 'Avg Frame Time', value: '22 ms' },
    ],
    code: `// Avoid forcing layout in loops
elements.forEach(el => {
  el.style.width = computedWidth + 'px'
})`,
  },
}

interface PerformanceBreakdownChartProps {
  isExpanded?: boolean
  onExpandChange?: (expanded: boolean) => void
}

export function PerformanceBreakdownChart({ isExpanded = false, onExpandChange }: PerformanceBreakdownChartProps) {
  const chartRef = React.useRef<any>(null)
  const [selectedSegment, setSelectedSegment] = React.useState<string | null>(null)
  const [showDetails, setShowDetails] = React.useState(false)
  const [showExpandedView, setShowExpandedView] = React.useState(false)

  // Handle animations timing
  React.useEffect(() => {
    if (isExpanded && selectedSegment) {
      // Delay showing expanded view to sync with container animation
      const expandTimer = setTimeout(() => {
        setShowExpandedView(true)
      }, 150)
      // Delay showing details for smooth transition
      const detailsTimer = setTimeout(() => {
        setShowDetails(true)
      }, 300)
      return () => {
        clearTimeout(expandTimer)
        clearTimeout(detailsTimer)
      }
    } else {
      setShowDetails(false)
      setShowExpandedView(false)
    }
  }, [isExpanded, selectedSegment])

  const handleClick = (_event: unknown, elements: { index: number }[]) => {
    if (!elements || elements.length === 0) {
      setSelectedSegment(null)
      onExpandChange?.(false)
      return
    }
    const { index } = elements[0]
    const label = data.labels?.[index] as string
    setSelectedSegment(label)
    onExpandChange?.(true)
  }

  const handleClose = () => {
    setShowDetails(false)
    // Delay closing to allow animation
    setTimeout(() => {
      setShowExpandedView(false)
      setSelectedSegment(null)
      onExpandChange?.(false)
    }, 300)
  }

  // If expanded and a segment is selected, show split pane view
  if (showExpandedView && selectedSegment) {
    return (
      <div className="flex h-[600px] pr-6 gap-0 relative overflow-hidden animate-fade-in">
        {/* Left side - Chart without animation */}
        <div className="flex-1 flex items-center justify-center min-w-0">
          <div className="w-full h-full max-w-[500px] max-h-[500px] p-4">
            <Pie
              ref={chartRef}
              data={data}
              options={{
                ...options,
                onClick: handleClick as unknown as ChartOptions<'pie'>['onClick'],
                layout: {
                  padding: {
                    top: 80,
                    right: 80,
                    bottom: 80,
                    left: 80,
                  },
                },
              }}
            />
          </div>
        </div>
        
        {/* Right side - Details with fixed animation */}
        <div className="flex-1 relative min-w-0">
          <div 
            className={`
              absolute inset-0 bg-gray-900/50 rounded-lg border border-gray-800 p-6 overflow-y-auto
              transition-all duration-200 ease-out
              ${showDetails 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
              }
            `}
          >
            <div className="space-y-4">
              {/* Header with fade-in */}
              <div 
                className={`
                  flex items-center justify-between
                  transition-all duration-200 delay-100
                  ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-gray-200">{selectedSegment} Analysis</h3>
                  <p className="text-sm text-gray-400">{segmentDetails[selectedSegment].summary}</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-200 transition-all p-2 hover:bg-gray-800 rounded-lg hover:scale-110 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Metrics Grid with staggered animation */}
              <div className="grid grid-cols-3 gap-3">
                {segmentDetails[selectedSegment].metrics.map((metric, index) => (
                  <div 
                    key={metric.name} 
                    className={`
                      bg-gray-800/50 rounded-lg p-3
                      transition-all duration-200
                      ${showDetails 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                      }
                    `}
                    style={{
                      transitionDelay: showDetails ? `${200 + index * 50}ms` : '0ms'
                    }}
                  >
                    <div className="text-xs text-gray-400">{metric.name}</div>
                    <div className="text-base font-semibold text-gray-200 mt-1">{metric.value}</div>
                  </div>
                ))}
              </div>
              
              {/* Code Sample with slide-up animation */}
              {segmentDetails[selectedSegment].code && (
                <div 
                  className={`
                    space-y-2
                    transition-all duration-200 delay-300
                    ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                >
                  <h4 className="text-sm font-medium text-gray-300">Example Code</h4>
                  <pre className="bg-gray-950/50 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre text-gray-300 border border-gray-800">
{segmentDetails[selectedSegment].code}
                  </pre>
                </div>
              )}
              
              {/* Recommendations with staggered fade-in */}
              <div 
                className={`
                  space-y-2
                  transition-all duration-200 delay-400
                  ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                <h4 className="text-sm font-medium text-gray-300">Optimization Recommendations</h4>
                <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                  {[
                    'Implement caching strategies to reduce repeated computations',
                    'Consider using worker threads for CPU-intensive operations',
                    'Profile and optimize the identified bottlenecks'
                  ].map((recommendation, index) => (
                    <div 
                      key={index}
                      className={`
                        flex items-start space-x-2
                        transition-all duration-200
                        ${showDetails ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                      `}
                      style={{
                        transitionDelay: showDetails ? `${500 + index * 50}ms` : '0ms'
                      }}
                    >
                      <span className="text-green-400">•</span>
                      <p className="text-sm text-gray-300 mt-0.5">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default compact view without animation
  return (
    <div className={`w-full h-[400px] relative ${selectedSegment ? 'animate-fade-out' : ''}`}>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full h-full max-w-[400px] max-h-[400px]">
          <Pie
            ref={chartRef}
            data={data}
            options={{
              ...options,
              onClick: handleClick as unknown as ChartOptions<'pie'>['onClick'],
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-fade-out {
          animation: fade-out 0.2s ease-out;
        }
      `}</style>
    </div>
  )
} 