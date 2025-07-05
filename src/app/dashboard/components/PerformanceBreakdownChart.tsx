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
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

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
        'rgba(99, 102, 241, 0.7)', // indigo-500
        'rgba(16, 185, 129, 0.7)', // emerald-500
        'rgba(239, 68, 68, 0.7)', // red-500
        'rgba(34, 197, 94, 0.7)', // green-500
        'rgba(234, 179, 8, 0.7)', // yellow-500
        'rgba(59, 130, 246, 0.7)', // blue-500
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(234, 179, 8, 1)',
        'rgba(59, 130, 246, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#e5e7eb',
        padding: 16,
        font: {
          size: 12,
        },
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const hotspot = hotspotData[ctx.label]
          return [
            `Savings: ${hotspot.potentialSavings}`,
            `Cost to optimize: ${hotspot.costPerMonth}`,
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

export function PerformanceBreakdownChart() {
  const chartRef = React.useRef<any>(null)
  const [selectedSegment, setSelectedSegment] = React.useState<string | null>(null)

  const handleClick = (_event: unknown, elements: { index: number }[]) => {
    if (!elements || elements.length === 0) return
    const { index } = elements[0]
    const label = data.labels?.[index] as string
    setSelectedSegment(label)
  }

  return (
    <div className="w-full relative flex flex-row items-start gap-4">
      <div className="w-64 h-64 cursor-pointer">
        <Pie
          ref={chartRef}
          data={data}
          options={{
            ...options,
            onClick: handleClick as unknown as ChartOptions<'pie'>['onClick'],
          }}
        />
      </div>
      {selectedSegment && (
        <div 
          className="flex-1 rounded-lg bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 p-4 
          transition-all duration-500 space-y-3 text-sm overflow-auto max-h-[400px] animate-in fade-in zoom-in-95 
          slide-in-from-right-8 duration-700 ease-out"
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-gray-200">{selectedSegment} Hotspot</h4>
              <div className="text-sm font-semibold text-red-400">Critical</div>
            </div>
            <p className="text-gray-400">{segmentDetails[selectedSegment].summary}</p>
          </div>

          <table className="w-full text-left text-xs table-auto border-collapse mt-4">
            <tbody>
              {segmentDetails[selectedSegment].metrics.map((m) => (
                <tr key={m.name} className="border-t border-gray-800">
                  <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">{m.name}</td>
                  <td className="py-2 text-gray-300">{m.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {segmentDetails[selectedSegment].code && (
            <pre className="bg-gray-950/50 rounded p-3 text-[11px] overflow-x-auto whitespace-pre text-gray-300">
{segmentDetails[selectedSegment].code}
            </pre>
          )}
        </div>
      )}
    </div>
  )
} 