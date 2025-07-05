import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { 
  ImpactSummaryResponseSchema,
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

// GET /api/impact?type=summary
// GET /api/impact?type=cost-carbon&range=12mo
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    
    switch (type) {
      case 'summary':
        return await getImpactSummary()
      case 'cost-carbon':
        return await getCostCarbonChart(searchParams)
      default:
        return NextResponse.json(
          { error: 'Invalid type', message: 'Type must be "summary" or "cost-carbon"' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in impact API:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch impact data' },
      { status: 500 }
    )
  }
}

async function getImpactSummary() {
  // Get the most recent monthly impact data
  const monthlyImpact = await prisma.impact.findFirst({
    where: { period: 'monthly' },
    orderBy: { periodStart: 'desc' }
  })

  // Get current active runs
  const activeRuns = await prisma.optimizationRun.count({
    where: { status: 'running' }
  })

  if (!monthlyImpact) {
    // Return default values if no data exists
    const response = ImpactSummaryResponseSchema.parse({
      monthlySavings: 0,
      co2Reduction: 0,
      requestCost: 0,
      responseTime: 0,
      activeRuns,
      tokenSpend: 0,
      roi: 0,
      treesSaved: 0,
      uptime: 0
    })
    return NextResponse.json(response)
  }

  const response = ImpactSummaryResponseSchema.parse({
    monthlySavings: monthlyImpact.costSavings,
    co2Reduction: monthlyImpact.carbonReduction,
    requestCost: monthlyImpact.requestCostReduction,
    responseTime: monthlyImpact.responseTimeReduction,
    activeRuns,
    tokenSpend: monthlyImpact.tokenSpend,
    roi: monthlyImpact.roi,
    treesSaved: monthlyImpact.treesEquivalent,
    uptime: monthlyImpact.uptime
  })

  return NextResponse.json(response)
}

async function getCostCarbonChart(searchParams: URLSearchParams) {
  const { range } = DateRangeQuerySchema.parse({
    range: searchParams.get('range')
  })

  const days = getRangeDays(range)
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)

  // Get impact data over time
  const impactData = await prisma.impact.findMany({
    where: {
      periodStart: { gte: startDate },
      period: range === '12mo' ? 'monthly' : 'weekly'
    },
    orderBy: { periodStart: 'asc' },
    select: {
      periodStart: true,
      costSavings: true,
      carbonReduction: true
    }
  })

  // Transform data for the chart
  const costData = impactData.map(item => ({
    date: item.periodStart.toISOString().split('T')[0],
    value: item.costSavings
  }))

  const carbonData = impactData.map(item => ({
    date: item.periodStart.toISOString().split('T')[0],
    value: item.carbonReduction
  }))

  return NextResponse.json({
    cost: { data: costData },
    carbon: { data: carbonData }
  })
} 