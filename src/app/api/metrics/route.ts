import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { 
  KpiMetricsResponseSchema, 
  PerformanceChartResponseSchema,
  DateRangeQuerySchema 
} from '@/lib/types'

// Helper function to convert date range to days
function getRangeDays(range: string): number {
  const rangeMap: Record<string, number> = {
    '7d': 7,
    '30d': 30,
    '90d': 90,
    '180d': 180,
    '12mo': 365
  }
  return rangeMap[range] || 30
}

// GET /api/metrics?type=kpi
// GET /api/metrics?type=performance&range=30d
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const { range } = DateRangeQuerySchema.parse({
      range: searchParams.get('range')
    })

    const days = getRangeDays(range)
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)

    switch (type) {
      case 'kpi':
        return await getKpiMetrics()
      case 'performance':
        return await getPerformanceChart(startDate)
      default:
        return NextResponse.json(
          { error: 'Invalid type', message: 'Type must be "kpi" or "performance"' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in metrics API:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}

async function getKpiMetrics() {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  // Get active hotspots count
  const activeHotspots = await prisma.hotspot.count({
    where: {
      status: 'active'
    }
  })

  // Get average performance gain from recent optimizations
  const recentOptimizations = await prisma.optimization.findMany({
    where: {
      appliedAt: {
        gte: thirtyDaysAgo
      },
      performanceGain: {
        not: null
      }
    },
    select: {
      performanceGain: true
    }
  })

  const avgPerformanceGain = recentOptimizations.length > 0
    ? recentOptimizations.reduce((sum: number, opt) => sum + (opt.performanceGain || 0), 0) / recentOptimizations.length
    : 0

  // Get total cost savings from last 30 days
  const recentCostSavings = await prisma.optimization.findMany({
    where: {
      appliedAt: {
        gte: thirtyDaysAgo
      },
      costSavings: {
        not: null
      }
    },
    select: {
      costSavings: true
    }
  })

  const totalCostSavings = recentCostSavings.reduce((sum: number, opt) => sum + (opt.costSavings || 0), 0)

  // Calculate success rate from recent optimization runs
  const recentRuns = await prisma.optimizationRun.findMany({
    where: {
      startedAt: {
        gte: thirtyDaysAgo
      }
    },
    select: {
      status: true
    }
  })

  const successRate = recentRuns.length > 0
    ? (recentRuns.filter(run => run.status === 'completed').length / recentRuns.length) * 100
    : 0

  const response = KpiMetricsResponseSchema.parse({
    activeHotspots,
    performanceGain: Math.round(avgPerformanceGain * 10) / 10,
    costSavings: Math.round(totalCostSavings * 100) / 100,
    successRate: Math.round(successRate * 10) / 10
  })

  return NextResponse.json(response)
}

async function getPerformanceChart(startDate: Date) {
  // Get performance metrics over time
  const metrics = await prisma.metric.findMany({
    where: {
      name: 'response_time',
      timestamp: {
        gte: startDate
      }
    },
    orderBy: {
      timestamp: 'asc'
    },
    select: {
      value: true,
      timestamp: true
    }
  })

  // Group by date and calculate average
  const dailyMetrics = metrics.reduce((acc: Record<string, { sum: number; count: number }>, metric: { value: number; timestamp: Date }) => {
    const date = metric.timestamp.toISOString().split('T')[0]
    if (!acc[date]) {
      acc[date] = { sum: 0, count: 0 }
    }
    acc[date].sum += metric.value
    acc[date].count += 1
    return acc
  }, {})

  const data = Object.entries(dailyMetrics).map(([date, { sum, count }]) => ({
    date,
    value: Math.round(sum / count)
  }))

  const response = PerformanceChartResponseSchema.parse({ data })
  return NextResponse.json(response)
} 