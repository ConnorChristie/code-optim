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
  if (severity >= 0.7) return 'bg-red-500'
  if (severity >= 0.4) return 'bg-yellow-500'
  return 'bg-green-500'
}

export function HotspotsList() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File</TableHead>
            <TableHead>Lines</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Improvement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHotspots.map((hotspot) => (
            <TableRow key={hotspot.id}>
              <TableCell className="font-medium">{hotspot.filePath}</TableCell>
              <TableCell>{`${hotspot.lineStart}-${hotspot.lineEnd}`}</TableCell>
              <TableCell>
                <Badge 
                  className={`${getSeverityColor(hotspot.severity)}`}
                >
                  {(hotspot.severity * 100).toFixed(0)}%
                </Badge>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{hotspot.description}</p>
                  <p className="text-sm text-gray-500">{hotspot.suggestedFix}</p>
                </div>
              </TableCell>
              <TableCell className="text-green-600">
                +{hotspot.estimatedImprovement}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 