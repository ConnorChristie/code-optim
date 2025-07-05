import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { 
  OptimizationSummaryResponseSchema,
  OptimizationsQuerySchema,
  OptimizationRequest,
  OptimizationJobResponseSchema 
} from '@/lib/types'

// GET /api/optimizations?type=summary
// GET /api/optimizations?type=history&page=1&limit=10
// GET /api/optimizations?type=recent&limit=5
// POST /api/optimizations - Start optimization job
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    
    switch (type) {
      case 'summary':
        return await getOptimizationSummary()
      case 'history':
        return await getOptimizationHistory(searchParams)
      case 'recent':
        return await getRecentOptimizations(searchParams)
      default:
        return NextResponse.json(
          { error: 'Invalid type', message: 'Type must be "summary", "history", or "recent"' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in optimizations API:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch optimizations' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { repoUrl, config } = body as OptimizationRequest
    
    // Create optimization job
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const optimizationRun = await prisma.optimizationRun.create({
      data: {
        jobId,
        repoUrl,
        status: 'pending'
      }
    })
    
    // Queue the job (this would typically publish to Redis)
    // For now, we'll just return the job ID
    
    const response = OptimizationJobResponseSchema.parse({
      jobId,
      status: 'pending',
      message: 'Optimization job queued successfully'
    })
    
    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating optimization job:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to create optimization job' },
      { status: 500 }
    )
  }
}

async function getOptimizationSummary() {
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  // Total applied optimizations
  const totalApplied = await prisma.optimization.count({
    where: { status: 'applied' }
  })

  // Best performance gain
  const bestOptimization = await prisma.optimization.findFirst({
    where: { 
      status: 'applied',
      performanceGain: { not: null }
    },
    orderBy: { performanceGain: 'desc' },
    select: { performanceGain: true }
  })

  // This week's optimizations
  const thisWeek = await prisma.optimization.count({
    where: {
      appliedAt: { gte: oneWeekAgo },
      status: 'applied'
    }
  })

  // Top category by count
  const categoryStats = await prisma.optimization.groupBy({
    by: ['category'],
    _count: true,
    where: { status: 'applied' },
    orderBy: { _count: { category: 'desc' } },
    take: 1
  })

  const topCategory = categoryStats[0]?.category || 'Database'

  // Average impact
  const appliedOptimizations = await prisma.optimization.findMany({
    where: {
      status: 'applied',
      performanceGain: { not: null }
    },
    select: { performanceGain: true }
  })

  const avgImpact = appliedOptimizations.length > 0
    ? appliedOptimizations.reduce((sum: number, opt) => sum + (opt.performanceGain || 0), 0) / appliedOptimizations.length
    : 0

  const response = OptimizationSummaryResponseSchema.parse({
    totalApplied,
    bestResult: bestOptimization?.performanceGain || 0,
    thisWeek,
    topCategory,
    avgImpact: Math.round(avgImpact * 10) / 10
  })

  return NextResponse.json(response)
}

async function getOptimizationHistory(searchParams: URLSearchParams) {
  const query = OptimizationsQuerySchema.parse({
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
    status: searchParams.get('status'),
    category: searchParams.get('category'),
    sortBy: searchParams.get('sortBy'),
    sortOrder: searchParams.get('sortOrder')
  })

  const where = {
    ...(query.status && { status: query.status }),
    ...(query.category && { category: query.category })
  }

  const orderBy = {
    [query.sortBy]: query.sortOrder
  }

  const [optimizations, total] = await Promise.all([
    prisma.optimization.findMany({
      where,
      orderBy,
      skip: (query.page - 1) * query.limit,
      take: query.limit,
      include: {
        hotspot: {
          select: {
            id: true,
            title: true,
            category: true,
            priority: true
          }
        }
      }
    }),
    prisma.optimization.count({ where })
  ])

  return NextResponse.json({
    optimizations,
    pagination: {
      page: query.page,
      limit: query.limit,
      total,
      pages: Math.ceil(total / query.limit)
    }
  })
}

async function getRecentOptimizations(searchParams: URLSearchParams) {
  const limit = parseInt(searchParams.get('limit') || '10')
  
  const optimizations = await prisma.optimization.findMany({
    where: { status: 'applied' },
    orderBy: { appliedAt: 'desc' },
    take: limit,
    select: {
      id: true,
      title: true,
      category: true,
      performanceGain: true,
      costSavings: true,
      appliedAt: true
    }
  })

  return NextResponse.json({ optimizations })
} 