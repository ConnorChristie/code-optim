import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prefectAPI, statusMap } from '@/lib/prefect';

// Schema for job submission
const CreateJobSchema = z.object({
  repo_path: z.string().min(1, "Repository path is required"),
  priority: z.enum(['low', 'normal', 'high', 'urgent']).default('normal'),
  config: z.object({
    max_cost: z.number().min(0).default(10.0),
    max_time: z.number().min(0).default(7200),
    max_iterations: z.number().min(1).default(5),
    target_improvement: z.number().min(0).default(5.0),
    enable_monitoring: z.boolean().default(true),
    auto_pause_on_error: z.boolean().default(true),
  }).optional()
});

// Schema for listing jobs
const ListJobsSchema = z.object({
  status: z.enum(['pending', 'queued', 'running', 'paused', 'completed', 'failed', 'cancelled']).optional(),
  limit: z.number().min(1).max(1000).default(100),
  page: z.number().min(1).default(1)
});

class JobsAPI {
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.PYTHON_API_URL || 'http://localhost:8000';
  }

  async submitJob(repo_path: string, priority: string = 'normal', config?: any): Promise<string> {
    try {
      const response = await fetch(`${this.apiUrl}/jobs/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repo_path,
          priority,
          config: config || {}
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.job_id;
    } catch (error) {
      console.error('Error submitting job:', error);
      throw new Error('Failed to submit job to processing service');
    }
  }

  async listJobs(status?: string, limit: number = 100): Promise<any[]> {
    try {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      params.append('limit', limit.toString());

      const response = await fetch(`${this.apiUrl}/jobs?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error listing jobs:', error);
      throw new Error('Failed to fetch jobs from processing service');
    }
  }

  async getQueueStats(): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/queue/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching queue stats:', error);
      throw new Error('Failed to fetch queue statistics');
    }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const jobId = searchParams.get('job_id');
    if (jobId) {
      const [flowRun, state] = await Promise.all([
        prefectAPI.getFlowRun(jobId),
        prefectAPI.getFlowRunState(jobId)
      ]);

      return NextResponse.json({
        job_id: jobId,
        status: state?.type ?? 'UNKNOWN',
        result: state?.result ?? null,
        flow_run: flowRun
      });
    }

    // Get pagination parameters
    const limit = parseInt(searchParams.get('limit') || '100');
    const page = parseInt(searchParams.get('page') || '1');
    const status = searchParams.get('status');

    const flowRuns = await prefectAPI.listFlowRuns(
      status ? statusMap[status] : undefined,
      limit,
      page
    );

    // Transform flow runs into jobs format
    const jobs = flowRuns.map(run => ({
      job_id: run.id,
      repo_path: run.parameters?.repo_path || 'unknown',
      status: Object.entries(statusMap).find(([_, v]) => v === run.state.type)?.[0] || 'unknown',
      priority: run.parameters?.priority || 'normal',
      config: run.parameters?.config || {},
      result: run.state.result || null,
      created_at: run.created,
      updated_at: run.updated || run.created
    }));

    return NextResponse.json({ jobs });

  } catch (error) {
    console.error('Error in GET /api/jobs (Prefect version):', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = CreateJobSchema.parse(body);

    const flowRunId = await prefectAPI.createFlowRun(
      validatedData.repo_path,
      {
        ...validatedData.config,
        priority: validatedData.priority
      }
    );

    const state = await prefectAPI.getFlowRunState(flowRunId);

    return NextResponse.json(
      { 
        job_id: flowRunId,
        message: 'Job submitted successfully',
        status: state?.type || 'SCHEDULED'
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in POST /api/jobs:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request body', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit job' },
      { status: 500 }
    );
  }
} 