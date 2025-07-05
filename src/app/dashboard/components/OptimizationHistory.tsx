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

type OptimizationRecord = {
  id: string
  date: string
  type: string
  file: string
  improvement: number
  status: 'success' | 'failed' | 'reverted'
  timeToImplement: string
  description: string
}

const mockHistory: OptimizationRecord[] = [
  {
    id: '1',
    date: '2024-01-20',
    type: 'Database',
    file: 'src/services/reports/query.ts',
    improvement: 42,
    status: 'success',
    timeToImplement: '2.5 days',
    description: 'Added composite index for user reports query',
  },
  {
    id: '2',
    date: '2024-01-19',
    type: 'Memory',
    file: 'src/utils/cache.ts',
    improvement: 28,
    status: 'success',
    timeToImplement: '1 day',
    description: 'Implemented LRU cache with size limits',
  },
  {
    id: '3',
    date: '2024-01-18',
    type: 'Algorithm',
    file: 'src/components/DataGrid.tsx',
    improvement: 35,
    status: 'success',
    timeToImplement: '3 days',
    description: 'Replaced O(n²) loop with hash map lookup',
  },
  {
    id: '4',
    date: '2024-01-17',
    type: 'Network',
    file: 'src/api/external.ts',
    improvement: -5,
    status: 'reverted',
    timeToImplement: '1.5 days',
    description: 'Batch API calls caused timeout issues',
  },
  {
    id: '5',
    date: '2024-01-16',
    type: 'CPU',
    file: 'src/workers/processor.ts',
    improvement: 22,
    status: 'success',
    timeToImplement: '2 days',
    description: 'Moved heavy computation to Web Worker',
  },
  {
    id: '6',
    date: '2024-01-15',
    type: 'I/O',
    file: 'src/services/files.ts',
    improvement: 0,
    status: 'failed',
    timeToImplement: '1 day',
    description: 'Stream processing incompatible with current architecture',
  },
]

function getStatusBadge(status: OptimizationRecord['status'], improvement: number) {
  switch (status) {
    case 'success':
      return (
        <Badge className="bg-green-600/20 text-green-400 border-green-500/50">
          +{improvement}%
        </Badge>
      )
    case 'failed':
      return (
        <Badge className="bg-red-600/20 text-red-400 border-red-500/50">
          Failed
        </Badge>
      )
    case 'reverted':
      return (
        <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500/50">
          Reverted
        </Badge>
      )
  }
}

function getTypeColor(type: string) {
  const colors: Record<string, string> = {
    Database: 'text-blue-400',
    Memory: 'text-purple-400',
    Algorithm: 'text-indigo-400',
    Network: 'text-cyan-400',
    CPU: 'text-orange-400',
    'I/O': 'text-pink-400',
  }
  return colors[type] || 'text-gray-400'
}

export function OptimizationHistory() {
  return (
    <div className="rounded-md border border-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-800 hover:bg-gray-900/50">
            <TableHead className="text-gray-300">Date</TableHead>
            <TableHead className="text-gray-300">Type</TableHead>
            <TableHead className="text-gray-300">File</TableHead>
            <TableHead className="text-gray-300">Impact</TableHead>
            <TableHead className="text-gray-300">Time</TableHead>
            <TableHead className="text-gray-300">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHistory.map((record) => (
            <TableRow key={record.id} className="border-gray-800 hover:bg-gray-900/30">
              <TableCell className="text-gray-400 text-sm">
                {record.date}
              </TableCell>
              <TableCell>
                <span className={`text-sm font-medium ${getTypeColor(record.type)}`}>
                  {record.type}
                </span>
              </TableCell>
              <TableCell className="text-gray-300 text-sm font-mono">
                {record.file}
              </TableCell>
              <TableCell>
                {getStatusBadge(record.status, record.improvement)}
              </TableCell>
              <TableCell className="text-gray-400 text-sm">
                {record.timeToImplement}
              </TableCell>
              <TableCell className="text-gray-300 text-sm">
                {record.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 