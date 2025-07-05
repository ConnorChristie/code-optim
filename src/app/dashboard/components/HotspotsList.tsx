'use client'

import { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/client/components/ui/table"
import { Badge } from "@/app/client/components/ui/badge"

// Define an Investigation type that captures the information we want to surface
// about each ongoing performance investigation.
type Investigation = {
  id: string
  title: string
  progress: number // 0-1 where 1 == 100 %
  status: 'In Progress' | 'Cancelled' | 'Completed' | 'Pending'
  expectation: string
  nextStep: string
  description: string
  owner: string
  startedAt: string
  // New fields for detailed view
  metrics: {
    latencyImprovement: number
    costReduction: number
    memoryOptimization: number
    cpuUtilization: number
  }
  timeline: {
    date: string
    event: string
    impact: string
  }[]
  relatedFiles: {
    path: string
    issues: number
    improvement: number
  }[]
  recommendations: string[]
  risks: string[]
}

// Temporary mock data – replace with API data once backend endpoint is ready.
const mockInvestigations: Investigation[] = [
  {
    id: '1',
    title: 'Optimize database query for reports',
    progress: 0.55,
    status: 'In Progress',
    expectation: 'Expect 20% latency reduction',
    nextStep: 'Benchmark new index and deploy to staging',
    description: 'Running query planner analysis and evaluating missing indexes that cause full table scans during report generation.',
    owner: 'Alice',
    startedAt: '2025-07-01',
    metrics: {
      latencyImprovement: 20.0,
      costReduction: 25.0,
      memoryOptimization: 10.0,
      cpuUtilization: -15.0
    },
    timeline: [
      {
        date: '2025-07-01',
        event: 'Investigation Started',
        impact: 'Identified potential query bottleneck'
      },
      {
        date: '2025-07-02',
        event: 'Index Analysis',
        impact: 'Identified 3 candidate indexes'
      },
      {
        date: '2025-07-03',
        event: 'Planned Implementation',
        impact: 'Anticipating 20% latency improvement'
      }
    ],
    relatedFiles: [
      {
        path: 'src/services/reports/query.ts',
        issues: 3,
        improvement: 30.0
      },
      {
        path: 'src/database/schema.ts',
        issues: 1,
        improvement: 15.0
      }
    ],
    recommendations: [
      'Add composite index on (user_id, report_date)',
      'Implement query result caching',
      'Split large queries into smaller chunks'
    ],
    risks: [
      'Index size may impact write performance',
      'Cache invalidation complexity',
      'Potential memory pressure from result sets'
    ]
  },
  {
    id: '2',
    title: 'Refactor image processing pipeline',
    progress: 0.25,
    status: 'Cancelled',
    expectation: 'Cut processing cost by 30%',
    nextStep: 'Resolve dependency conflict in build',
    description: 'Investigating high memory usage in the image resizing step; build currently fails on new SIMD dependency.',
    owner: 'Bob',
    startedAt: '2025-06-28',
    metrics: {
      latencyImprovement: 15.0,
      costReduction: 30.0,
      memoryOptimization: -20.0,
      cpuUtilization: 10.0
    },
    timeline: [
      {
        date: '2025-06-28',
        event: 'Investigation Started',
        impact: 'Potential memory optimization identified'
      },
      {
        date: '2025-06-29',
        event: 'SIMD Planning',
        impact: 'Evaluating ARM64 compatibility'
      },
      {
        date: '2025-06-30',
        event: 'Dependency Review',
        impact: 'Analyzing sharp package requirements'
      }
    ],
    relatedFiles: [
      {
        path: 'src/services/images/processor.ts',
        issues: 2,
        improvement: 40.0
      },
      {
        path: 'src/utils/image-resize.ts',
        issues: 4,
        improvement: 25.0
      }
    ],
    recommendations: [
      'Switch to WebAssembly for image processing',
      'Implement streaming for large images',
      'Add memory limits per process'
    ],
    risks: [
      'Breaking changes in image output',
      'Increased cold start time',
      'Platform compatibility issues'
    ]
  },
  {
    id: '3',
    title: 'Cache external API responses',
    progress: 1,
    status: 'Completed',
    expectation: 'Reduce API spend by $150/month',
    nextStep: 'Monitor cache hit rate over next week',
    description: 'Implemented Redis layer with 24-hour TTL for idempotent external calls.',
    owner: 'Carol',
    startedAt: '2025-06-25',
    metrics: {
      latencyImprovement: 50.0,
      costReduction: 40.0,
      memoryOptimization: 15.0,
      cpuUtilization: -10.0
    },
    timeline: [
      {
        date: '2025-06-25',
        event: 'Investigation Started',
        impact: 'API cost analysis completed'
      },
      {
        date: '2025-06-26',
        event: 'Redis Planning',
        impact: 'Cache strategy defined'
      },
      {
        date: '2025-06-27',
        event: 'Implementation Plan',
        impact: 'Targeting 50% latency reduction'
      }
    ],
    relatedFiles: [
      {
        path: 'src/services/api/cache.ts',
        issues: 0,
        improvement: 50.0
      },
      {
        path: 'src/config/redis.ts',
        issues: 1,
        improvement: 20.0
      }
    ],
    recommendations: [
      'Increase cache TTL for static data',
      'Implement cache warming',
      'Add cache invalidation endpoints'
    ],
    risks: [
      'Stale data in emergency scenarios',
      'Redis memory consumption',
      'Cache stampede during invalidation'
    ]
  },
]

// Helper returns a badge color based on the investigation status.
function getStatusColor(status: Investigation['status']): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-600/80 text-white'
    case 'In Progress':
      return 'bg-yellow-500/80 text-white'
    case 'Cancelled':
      return 'bg-red-600/80 text-white'
    default:
      return 'bg-gray-600/80 text-white'
  }
}

// NOTE: We keep the exported name the same so existing imports continue to work.
export function HotspotsList() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [investigations, setInvestigations] = useState<Investigation[]>([])

  // Fetch real hotspot data from the backend API once on mount
  useEffect(() => {
    fetch('/api/hotspots?type=list&limit=50&page=1')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.hotspots)) {
          const transformed = data.hotspots.map((h: any) => ({
            id: h.id,
            title: h.title ?? h.description?.slice(0, 60) ?? 'Hotspot',
            progress: 0,
            status: h.status === 'in_progress'
              ? 'In Progress'
              : h.status === 'completed'
              ? 'Completed'
              : 'Pending',
            expectation: `${(h.impact ?? 0).toFixed(1)}% potential improvement`,
            nextStep: h.suggestedFix ?? '',
            description: h.description ?? '',
            owner: h.owner ?? 'System',
            startedAt: h.createdAt ? new Date(h.createdAt).toISOString().slice(0, 10) : '',
            metrics: {
              latencyImprovement: h.impact ?? 0,
              costReduction: h.costReduction ?? 0,
              memoryOptimization: 0,
              cpuUtilization: 0,
            },
            timeline: [],
            relatedFiles: [
              {
                path: h.filePath ?? 'unknown',
                issues: 1,
                improvement: h.impact ?? 0,
              },
            ],
            recommendations: h.optimizations?.map((o: any) => o.description) ?? [],
            risks: [],
          })) as Investigation[]
          setInvestigations(transformed)
        }
      })
      .catch((err) => console.error('Failed to fetch hotspots', err))
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-800 hover:bg-gray-900/50">
            <TableHead className="text-gray-300">Investigation</TableHead>
            <TableHead className="text-gray-300 w-40">Progress</TableHead>
            <TableHead className="text-gray-300">Status</TableHead>
            <TableHead className="text-gray-300">Expectation</TableHead>
            <TableHead className="text-gray-300">Next Step</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(investigations.length ? investigations : mockInvestigations).map((inv) => (
            <>
              <TableRow
                key={inv.id}
                onClick={() => toggleExpand(inv.id)}
                className="border-gray-800 cursor-pointer hover:bg-transparent"
              >
                <TableCell className="font-medium text-indigo-400">{inv.title}</TableCell>
                <TableCell className="text-gray-200">
                  <div className="w-full h-2 bg-gray-700/50 rounded-full">
                    <div
                      className="h-2 rounded-full bg-indigo-500"
                      style={{ width: `${inv.progress * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{(inv.progress * 100).toFixed(0)}%</p>
                </TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(inv.status)}`}>{inv.status}</Badge>
                </TableCell>
                <TableCell className="text-gray-300">{inv.expectation}</TableCell>
                <TableCell className="text-gray-400">{inv.nextStep}</TableCell>
              </TableRow>
              {expandedIds.has(inv.id) && (
                <TableRow className="border-gray-800 bg-gray-900/40 hover:bg-transparent">
                  <TableCell colSpan={5} className="space-y-6 py-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400">Expected Latency Improvement</div>
                        <div className="text-2xl font-bold text-green-400">
                          {inv.metrics.latencyImprovement}%
                        </div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400">Target Cost Reduction</div>
                        <div className="text-2xl font-bold text-blue-400">
                          {inv.metrics.costReduction}%
                        </div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400">Anticipated Memory Impact</div>
                        <div className="text-2xl font-bold text-purple-400">
                          {inv.metrics.memoryOptimization}%
                        </div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400">Projected CPU Change</div>
                        <div className="text-2xl font-bold text-orange-400">
                          {inv.metrics.cpuUtilization}%
                        </div>
                      </div>
                    </div>

                    {/* Description and Basic Info */}
                    <div className="bg-gray-800/50 p-4 rounded-lg space-y-2">
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Description:</span> {inv.description}
                      </div>
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Owner:</span> {inv.owner}
                      </div>
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Started:</span> {inv.startedAt}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Timeline</h4>
                      <div className="space-y-2">
                        {inv.timeline.map((event, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-24 text-xs text-gray-400">{event.date}</div>
                            <div className="flex-1">
                              <div className="text-sm text-indigo-400">{event.event}</div>
                              <div className="text-xs text-gray-400">{event.impact}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Files */}
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Related Files</h4>
                      <div className="space-y-2">
                        {inv.relatedFiles.map((file, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="text-sm text-indigo-400">{file.path}</div>
                            <div className="flex items-center space-x-4">
                              <Badge className="bg-red-600/20 text-red-400">
                                {file.issues} issues
                              </Badge>
                              <Badge className="bg-green-600/20 text-green-400">
                                {file.improvement}% potential
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations and Risks */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Recommendations</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {inv.recommendations.map((rec, i) => (
                            <li key={i} className="text-sm text-gray-300">{rec}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Risks</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {inv.risks.map((risk, i) => (
                            <li key={i} className="text-sm text-red-400">{risk}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 