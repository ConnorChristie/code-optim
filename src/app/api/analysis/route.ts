import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { randomUUID } from 'crypto'

/**
 * POST /api/analysis
 *
 * Expected payload (condensed example):
 * {
 *   "job_id": "xyz",
 *   "repo_path": "https://github.com/foo/bar",
 *   "hotspots": [
 *     {
 *       "file_path": "src/main.py",
 *       "line_start": 10,
 *       "line_end": 30,
 *       "severity": 0.9,
 *       "description": "Inefficient nested loop",
 *       "suggested_fix": "Use a set for O(1) look-ups",
 *       "estimated_improvement": 75.0,
 *       "code_context": "...problem snippet..."
 *     }
 *   ],
 *   "optimizations": []
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic validation
    if (!Array.isArray(body.hotspots)) {
      return NextResponse.json({ error: 'hotspots array is required' }, { status: 400 })
    }

    const repoUrl: string | null = body.repo_path || body.repoUrl || null

    // 1. Record an OptimizationRun row (high-level summary of the scan)
    const run = await prisma.optimizationRun.create({
      data: {
        jobId: body.job_id ?? body.jobId ?? randomUUID(),
        repoUrl: repoUrl ?? 'unknown',
        status: 'completed',
        hotspotsFound: body.hotspots.length,
        optimizationsApplied: Array.isArray(body.optimizations) ? body.optimizations.length : 0,
        totalImprovements: body.total_improvement ?? null,
      },
    })

    // 2. Persist each hotspot
    for (const raw of body.hotspots) {
      await prisma.hotspot.create({
        data: {
          title: raw.description?.slice(0, 80) || 'Performance Hotspot',
          description: raw.description || '',
          filePath: raw.file_path || '',
          lineNumber: raw.line_start ?? null,
          category: raw.category || 'Algorithm',
          priority:
            raw.severity >= 0.8
              ? 'Critical'
              : raw.severity >= 0.6
              ? 'High'
              : raw.severity >= 0.3
              ? 'Medium'
              : 'Low',
          status: 'active',
          severity: raw.severity ?? 0,
          impact: raw.estimated_improvement ?? 0,
          estimatedSavings: raw.estimated_savings ?? null,
          repoUrl: repoUrl ?? undefined,
        },
      })
    }

    return NextResponse.json({ success: true, runId: run.id })
  } catch (err: any) {
    console.error('Failed to persist analysis', err)
    return NextResponse.json({ error: err.message ?? 'Internal error' }, { status: 500 })
  }
} 