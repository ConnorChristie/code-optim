'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/client/components/ui/table"
import { Badge } from "@/app/client/components/ui/badge"

type Hotspot = {
  id: string
  filePath: string
  lineStart: number
  lineEnd: number
  severity: number
  description: string
  suggestedFix: string
  estimatedImprovement: number
}

const mockHotspots: Hotspot[] = [
  {
    id: '1',
    filePath: 'src/components/DataGrid.tsx',
    lineStart: 45,
    lineEnd: 67,
    severity: 0.8,
    description: 'Inefficient nested loop causing O(n²) complexity',
    suggestedFix: 'Use a hash set for O(1) lookups instead of nested iteration',
    estimatedImprovement: 75.0,
  },
  {
    id: '2',
    filePath: 'src/utils/dataProcessing.ts',
    lineStart: 23,
    lineEnd: 35,
    severity: 0.6,
    description: 'Redundant API calls in render loop',
    suggestedFix: 'Implement request caching and debouncing',
    estimatedImprovement: 45.0,
  },
  {
    id: '3',
    filePath: 'src/hooks/useData.ts',
    lineStart: 89,
    lineEnd: 102,
    severity: 0.4,
    description: 'Memory leak in event listener cleanup',
    suggestedFix: 'Add proper cleanup in useEffect return function',
    estimatedImprovement: 25.0,
  },
]

function getSeverityColor(severity: number): string {
  if (severity >= 0.7) return 'bg-red-500/80 text-white'
  if (severity >= 0.4) return 'bg-yellow-500/80 text-white'
  return 'bg-green-500/80 text-white'
}

export function HotspotsList() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-800 hover:bg-gray-900/50">
            <TableHead className="text-gray-300">File</TableHead>
            <TableHead className="text-gray-300">Lines</TableHead>
            <TableHead className="text-gray-300">Severity</TableHead>
            <TableHead className="text-gray-300">Description</TableHead>
            <TableHead className="text-gray-300">Improvement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHotspots.map((hotspot) => (
            <TableRow key={hotspot.id} className="border-gray-800 hover:bg-gray-900/50">
              <TableCell className="font-medium text-indigo-400">{hotspot.filePath}</TableCell>
              <TableCell className="text-gray-300">{`${hotspot.lineStart}-${hotspot.lineEnd}`}</TableCell>
              <TableCell>
                <Badge 
                  className={`${getSeverityColor(hotspot.severity)}`}
                >
                  {(hotspot.severity * 100).toFixed(0)}%
                </Badge>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-gray-200">{hotspot.description}</p>
                  <p className="text-sm text-gray-400">{hotspot.suggestedFix}</p>
                </div>
              </TableCell>
              <TableCell className="text-green-400 font-semibold">
                +{hotspot.estimatedImprovement}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 