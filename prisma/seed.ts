import { PrismaClient } from '../src/app/generated/prisma-client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample hotspots
  const hotspots = await Promise.all([
    prisma.hotspot.create({
      data: {
        title: 'N+1 Query in User Service',
        description: 'Multiple database queries in loop causing performance degradation',
        filePath: 'src/services/user.service.ts',
        lineNumber: 45,
        category: 'Database',
        priority: 'High',
        status: 'active',
        severity: 0.8,
        impact: 0.75,
        estimatedSavings: 450.50,
        repoUrl: 'https://github.com/example/repo1',
      },
    }),
    prisma.hotspot.create({
      data: {
        title: 'Unoptimized API Endpoint',
        description: 'Expensive computation in synchronous API call',
        filePath: 'src/api/analytics.ts',
        lineNumber: 123,
        category: 'API',
        priority: 'Medium',
        status: 'in_progress',
        severity: 0.6,
        impact: 0.5,
        estimatedSavings: 220.75,
        repoUrl: 'https://github.com/example/repo2',
      },
    }),
    prisma.hotspot.create({
      data: {
        title: 'Memory Leak in Background Task',
        description: 'Background process not releasing memory properly',
        filePath: 'src/workers/background.worker.ts',
        lineNumber: 78,
        category: 'Memory',
        priority: 'Critical',
        status: 'active',
        severity: 0.9,
        impact: 0.85,
        estimatedSavings: 850.00,
        repoUrl: 'https://github.com/example/repo3',
      },
    }),
  ])

  // Create sample optimizations
  const optimizations = await Promise.all([
    prisma.optimization.create({
      data: {
        title: 'Database Query Optimization',
        description: 'Implemented eager loading to reduce N+1 queries',
        category: 'Database',
        type: 'refactor',
        status: 'applied',
        filePath: 'src/services/user.service.ts',
        lineNumber: 45,
        performanceGain: 42.3,
        costSavings: 450.50,
        carbonReduction: 12.5,
        executionTime: 120,
        repoUrl: 'https://github.com/example/repo1',
        appliedAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
        hotspotId: hotspots[0].id,
      },
    }),
    prisma.optimization.create({
      data: {
        title: 'API Caching Implementation',
        description: 'Added Redis caching for expensive analytics queries',
        category: 'API',
        type: 'config',
        status: 'applied',
        filePath: 'src/api/analytics.ts',
        lineNumber: 123,
        performanceGain: 67.8,
        costSavings: 340.25,
        carbonReduction: 8.7,
        executionTime: 180,
        repoUrl: 'https://github.com/example/repo2',
        appliedAt: new Date(Date.now() - 86400000 * 5), // 5 days ago
      },
    }),
    prisma.optimization.create({
      data: {
        title: 'Algorithm Optimization',
        description: 'Replaced O(n²) algorithm with O(n log n) implementation',
        category: 'Algorithm',
        type: 'refactor',
        status: 'applied',
        filePath: 'src/utils/sorting.ts',
        lineNumber: 34,
        performanceGain: 78.9,
        costSavings: 125.75,
        carbonReduction: 3.2,
        executionTime: 90,
        repoUrl: 'https://github.com/example/repo4',
        appliedAt: new Date(Date.now() - 86400000 * 7), // 7 days ago
      },
    }),
  ])

  // Create sample optimization runs
  const optimizationRuns = await Promise.all([
    prisma.optimizationRun.create({
      data: {
        jobId: 'job_' + Date.now(),
        repoUrl: 'https://github.com/example/repo1',
        status: 'completed',
        startedAt: new Date(Date.now() - 86400000 * 2),
        completedAt: new Date(Date.now() - 86400000 * 2 + 3600000), // 1 hour later
        hotspotsFound: 3,
        optimizationsApplied: 2,
        totalImprovements: 45.6,
      },
    }),
    prisma.optimizationRun.create({
      data: {
        jobId: 'job_' + (Date.now() + 1),
        repoUrl: 'https://github.com/example/repo2',
        status: 'running',
        startedAt: new Date(Date.now() - 1800000), // 30 minutes ago
        hotspotsFound: 2,
        optimizationsApplied: 1,
        totalImprovements: 32.1,
      },
    }),
  ])

  // Create sample metrics
  const now = new Date()
  const metrics = []
  
  // Generate performance metrics for the last 30 days
  for (let i = 0; i < 30; i++) {
    const date = new Date(now.getTime() - i * 86400000)
    
    metrics.push(
      prisma.metric.create({
        data: {
          name: 'response_time',
          value: Math.random() * 500 + 100, // 100-600ms
          unit: 'ms',
          category: 'performance',
          timestamp: date,
          repoUrl: 'https://github.com/example/repo1',
        },
      }),
      prisma.metric.create({
        data: {
          name: 'cpu_usage',
          value: Math.random() * 40 + 20, // 20-60%
          unit: 'percent',
          category: 'performance',
          timestamp: date,
          repoUrl: 'https://github.com/example/repo1',
        },
      }),
      prisma.metric.create({
        data: {
          name: 'cost_per_request',
          value: Math.random() * 0.005 + 0.001, // $0.001-0.006
          unit: 'dollars',
          category: 'cost',
          timestamp: date,
          repoUrl: 'https://github.com/example/repo1',
        },
      }),
    )
  }

  await Promise.all(metrics)

  // Create sample impact data
  const impacts = await Promise.all([
    prisma.impact.create({
      data: {
        period: 'monthly',
        periodStart: new Date(now.getFullYear(), now.getMonth(), 1),
        periodEnd: new Date(now.getFullYear(), now.getMonth() + 1, 0),
        costSavings: 1250.00,
        carbonReduction: 135.5,
        performanceGain: 24.3,
        requestCostReduction: 22.0,
        responseTimeReduction: 31.0,
        energySavings: 245.8,
        treesEquivalent: 6.2,
        roi: 684.0,
        uptime: 99.9,
        tokenSpend: 1.83,
        activeJobs: 3,
      },
    }),
    prisma.impact.create({
      data: {
        period: 'weekly',
        periodStart: new Date(now.getTime() - 7 * 86400000),
        periodEnd: new Date(now.getTime()),
        costSavings: 312.50,
        carbonReduction: 33.9,
        performanceGain: 18.7,
        requestCostReduction: 15.5,
        responseTimeReduction: 28.2,
        energySavings: 61.5,
        treesEquivalent: 1.6,
        roi: 520.0,
        uptime: 99.8,
        tokenSpend: 0.45,
        activeJobs: 2,
      },
    }),
  ])

  console.log('✅ Database seeded successfully!')
  console.log(`Created:`)
  console.log(`- ${hotspots.length} hotspots`)
  console.log(`- ${optimizations.length} optimizations`)
  console.log(`- ${optimizationRuns.length} optimization runs`)
  console.log(`- ${metrics.length} metrics`)
  console.log(`- ${impacts.length} impact records`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 