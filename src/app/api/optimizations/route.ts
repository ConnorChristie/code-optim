import { NextRequest, NextResponse } from 'next/server'
// Force Node.js runtime so we can use the Redis client
export const runtime = 'nodejs'

import { prisma } from '@/lib/db'
import { z } from 'zod'
import { OptimizationSummaryResponseSchema, OptimizationsQuerySchema } from '@/lib/types'
import { createClient, RedisClientType } from 'redis'

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'

// Lazily create a singleton redis client to appease type-checker & hot reloads
let redis: RedisClientType | null = null
function getRedis(): RedisClientType {
  if (!redis) {
    redis = createClient({ url: redisUrl }) as RedisClientType
    redis.on('error', (err) => console.error('Redis error', err))
    redis.connect().catch(console.error)
  }
  return redis
}

const CreateOptimizationSchema = z.object({
  githubUrl: z.string().url('A valid GitHub URL is required')
})

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

    // Validate body
    const { githubUrl } = CreateOptimizationSchema.parse(body)

    // Build job object compatible with Python QueueProcessor
    const jobId = `job_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

    const job = {
      job_id: jobId,
      repo_path: githubUrl,
      status: 'queued',
      priority: 'normal',
      config: {
        max_cost: 10.0,
        max_time: 7200,
        max_iterations: 5,
        target_improvement: 5.0,
        enable_monitoring: true,
        auto_pause_on_error: true
      },
      metrics: {
        cost_used: 0.0,
        time_used: 0.0,
        improvement_pct: 0.0,
        iterations: 0,
        files_processed: 0,
        hotspots_found: 0,
        optimizations_applied: 0
      },
      created_at: new Date().toISOString(),
      started_at: null,
      completed_at: null,
      paused_at: null,
      error_message: null,
      retry_count: 0,
      max_retries: 3,
      current_agent: null,
      progress_pct: 0.0,
      status_message: '',
      results: {},
      logs: [],
      runtime: null
    }

    // Store job details and enqueue
    const r = getRedis()
    await r.hSet('optimization_jobs', jobId, JSON.stringify(job))
    await r.lPush('optimization_queue', jobId)
    await r.publish('job_status_updates', JSON.stringify({
      job_id: jobId,
      status: 'queued',
      progress_pct: 0,
      status_message: 'Job queued',
      metrics: job.metrics,
      timestamp: new Date().toISOString()
    }))

    return NextResponse.json({ jobId, status: 'queued', message: 'Optimization started' }, { status: 201 })
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