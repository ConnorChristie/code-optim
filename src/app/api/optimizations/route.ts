import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { OptimizationSummaryResponseSchema, OptimizationsQuerySchema } from '@/lib/types'
import { prefectAPI } from '@/lib/prefect'
import { prompts, optimizations, hotspots } from '@/schema'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { eq, desc, and, sql, gt, isNotNull } from 'drizzle-orm'

const CreateOptimizationSchema = z.object({
  githubUrl: z.string().url('A valid GitHub URL is required')
})

function getDb() {
  const sqlClient = neon(process.env.DATABASE_URL!)
  return drizzle(sqlClient)
}

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

    // Fetch latest analyzer prompt
    let systemPrompt: string | undefined = undefined
    try {
      const db = getDb()
      const [promptRow] = await db
        .select()
        .from(prompts)
        .where(eq(prompts.name, 'analyzer'))
        .orderBy(desc(prompts.version))
        .limit(1)
      systemPrompt = promptRow?.content
    } catch (err) {
      console.error('Failed to fetch analyzer prompt:', err)
    }

    // Create a flow run in Prefect
    const config = {
      max_cost: 10.0,
      max_time: 7200,
      max_iterations: 5,
      target_improvement: 5.0,
      enable_monitoring: true,
      auto_pause_on_error: true,
      system_prompt: systemPrompt,
    }

    const flowRunId = await prefectAPI.createFlowRun('Optimization Workflow/default', githubUrl, config)
    const state = await prefectAPI.getFlowRunState(flowRunId)

    return NextResponse.json({ 
      jobId: flowRunId, 
      status: state?.type || 'SCHEDULED', 
      message: 'Optimization started' 
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating optimization job:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request body', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to create optimization job' },
      { status: 500 }
    )
  }
}

async function getOptimizationSummary() {
  const db = getDb()
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  // Total applied optimizations
  const [{ count: totalApplied }] = await db
    .select({ count: sql`count(*)::int` })
    .from(optimizations)
    .where(eq(optimizations.status, 'applied'))

  // Best performance gain
  const [bestOptimization] = await db
    .select({ performanceGain: optimizations.performanceGain })
    .from(optimizations)
    .where(and(eq(optimizations.status, 'applied'), isNotNull(optimizations.performanceGain)))
    .orderBy(desc(optimizations.performanceGain))
    .limit(1)

  // This week's optimizations
  const [{ count: thisWeek }] = await db
    .select({ count: sql`count(*)::int` })
    .from(optimizations)
    .where(and(
      eq(optimizations.status, 'applied'),
      gt(optimizations.appliedAt, oneWeekAgo)
    ))

  // Top category by count
  const [categoryStat] = await db
    .select({ category: optimizations.category, count: sql`count(*)::int` })
    .from(optimizations)
    .where(eq(optimizations.status, 'applied'))
    .groupBy(optimizations.category)
    .orderBy(desc(sql`count(*)`))
    .limit(1)
  const topCategory = categoryStat?.category || 'Database'

  // Average impact
  const appliedOptimizations = await db
    .select({ performanceGain: optimizations.performanceGain })
    .from(optimizations)
    .where(and(eq(optimizations.status, 'applied'), isNotNull(optimizations.performanceGain)))

  const avgImpact = appliedOptimizations.length > 0
    ? appliedOptimizations.reduce((sum, opt) => sum + (opt.performanceGain || 0), 0) / appliedOptimizations.length
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
  const db = getDb()
  const query = OptimizationsQuerySchema.parse({
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
    status: searchParams.get('status'),
    category: searchParams.get('category'),
    sortBy: searchParams.get('sortBy'),
    sortOrder: searchParams.get('sortOrder')
  })

  // Build where clause
  const whereClauses = []
  if (query.status) whereClauses.push(eq(optimizations.status, query.status))
  if (query.category) whereClauses.push(eq(optimizations.category, query.category))
  const where = whereClauses.length > 0 ? and(...whereClauses) : undefined

  // Order by
  const orderBy = query.sortBy ? [
    query.sortOrder === 'desc' ? desc(optimizations[query.sortBy]) : optimizations[query.sortBy]
  ] : []

  // Pagination
  const offset = (query.page - 1) * query.limit
  const limit = query.limit

  // Join with hotspots for extra info
  const optimizationsWithHotspot = await db
    .select({
      id: optimizations.id,
      title: optimizations.title,
      description: optimizations.description,
      category: optimizations.category,
      type: optimizations.type,
      status: optimizations.status,
      beforeCode: optimizations.beforeCode,
      afterCode: optimizations.afterCode,
      filePath: optimizations.filePath,
      lineNumber: optimizations.lineNumber,
      performanceGain: optimizations.performanceGain,
      costSavings: optimizations.costSavings,
      carbonReduction: optimizations.carbonReduction,
      executionTime: optimizations.executionTime,
      repoUrl: optimizations.repoUrl,
      hotspotId: optimizations.hotspotId,
      createdAt: optimizations.createdAt,
      updatedAt: optimizations.updatedAt,
      appliedAt: optimizations.appliedAt,
      hotspot: {
        id: hotspots.id,
        title: hotspots.title,
        category: hotspots.category,
        priority: hotspots.priority
      }
    })
    .from(optimizations)
    .leftJoin(hotspots, eq(optimizations.hotspotId, hotspots.id))
    .where(where)
    .orderBy(...orderBy)
    .offset(offset)
    .limit(limit)

  // Total count
  const [{ count: totalRaw }] = await db
    .select({ count: sql`count(*)::int` })
    .from(optimizations)
    .where(where)
  const total = typeof totalRaw === 'number' ? totalRaw : Number(totalRaw)

  return NextResponse.json({
    optimizations: optimizationsWithHotspot,
    pagination: {
      page: query.page,
      limit: query.limit,
      total,
      pages: Math.ceil(total / query.limit)
    }
  })
}

async function getRecentOptimizations(searchParams: URLSearchParams) {
  const db = getDb()
  const limit = parseInt(searchParams.get('limit') || '10')
  
  const optimizationsList = await db
    .select({
      id: optimizations.id,
      title: optimizations.title,
      category: optimizations.category,
      performanceGain: optimizations.performanceGain,
      costSavings: optimizations.costSavings,
      appliedAt: optimizations.appliedAt
    })
    .from(optimizations)
    .where(eq(optimizations.status, 'applied'))
    .orderBy(desc(optimizations.appliedAt))
    .limit(limit)

  return NextResponse.json({ optimizations: optimizationsList })
} 