import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { 
  HotspotSummaryResponseSchema,
  HotspotCategoriesResponseSchema,
  HotspotsQuerySchema 
} from '@/lib/types'

// GET /api/hotspots?type=summary
// GET /api/hotspots?type=categories
// GET /api/hotspots?type=list&page=1&limit=10&status=active
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    
    switch (type) {
      case 'summary':
        return await getHotspotSummary()
      case 'categories':
        return await getHotspotCategories()
      case 'list':
        return await getHotspotsList(searchParams)
      default:
        return NextResponse.json(
          { error: 'Invalid type', message: 'Type must be "summary", "categories", or "list"' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in hotspots API:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch hotspots' },
      { status: 500 }
    )
  }
}

async function getHotspotSummary() {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  // Get counts for different statuses
  const inProgress = await prisma.hotspot.count({
    where: { status: 'in_progress' }
  })

  const completed = await prisma.hotspot.count({
    where: { 
      status: 'completed',
      resolvedAt: {
        gte: thirtyDaysAgo
      }
    }
  })

  const highPriority = await prisma.hotspot.count({
    where: { 
      priority: 'High',
      status: { in: ['active', 'in_progress'] }
    }
  })

  // Calculate average resolution time
  const resolvedHotspots = await prisma.hotspot.findMany({
    where: {
      status: 'completed',
      resolvedAt: { not: null },
      createdAt: { gte: thirtyDaysAgo }
    },
    select: {
      createdAt: true,
      resolvedAt: true
    }
  })

  const avgResolution = resolvedHotspots.length > 0
    ? resolvedHotspots.reduce((sum: number, hotspot) => {
        const resolutionTime = hotspot.resolvedAt 
          ? (hotspot.resolvedAt.getTime() - hotspot.createdAt.getTime()) / (1000 * 60 * 60 * 24)
          : 0
        return sum + resolutionTime
      }, 0) / resolvedHotspots.length
    : 0

  const response = HotspotSummaryResponseSchema.parse({
    inProgress,
    completed,
    highPriority,
    avgResolution: Math.round(avgResolution * 10) / 10
  })

  return NextResponse.json(response)
}

async function getHotspotCategories() {
  const categories = await prisma.hotspot.groupBy({
    by: ['category'],
    _count: true,
    where: {
      status: { in: ['active', 'in_progress'] }
    }
  })

  const colorMap: Record<string, string> = {
    Database: '#3b82f6',
    API: '#10b981',
    Algorithm: '#f59e0b',
    Memory: '#ef4444',
    IO: '#8b5cf6'
  }

  const categoriesData = categories.map(cat => ({
    name: cat.category,
    value: cat._count,
    color: colorMap[cat.category] || '#6b7280'
  }))

  const response = HotspotCategoriesResponseSchema.parse({
    categories: categoriesData
  })

  return NextResponse.json(response)
}

async function getHotspotsList(searchParams: URLSearchParams) {
  const query = HotspotsQuerySchema.parse({
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
    status: searchParams.get('status'),
    category: searchParams.get('category'),
    priority: searchParams.get('priority')
  })

  const where = {
    ...(query.status && { status: query.status }),
    ...(query.category && { category: query.category }),
    ...(query.priority && { priority: query.priority })
  }

  const [hotspots, total] = await Promise.all([
    prisma.hotspot.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (query.page - 1) * query.limit,
      take: query.limit,
      include: {
        optimizations: {
          select: {
            id: true,
            title: true,
            status: true
          }
        }
      }
    }),
    prisma.hotspot.count({ where })
  ])

  return NextResponse.json({
    hotspots,
    pagination: {
      page: query.page,
      limit: query.limit,
      total,
      pages: Math.ceil(total / query.limit)
    }
  })
} 