import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

const jobsAPI = new JobsAPI();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const queryParams = {
      status: searchParams.get('status') || undefined,
      limit: parseInt(searchParams.get('limit') || '100'),
      page: parseInt(searchParams.get('page') || '1')
    };

    // Validate parameters
    const validParams = ListJobsSchema.parse(queryParams);

    // Fetch jobs from Python service
    const jobs = await jobsAPI.listJobs(validParams.status, validParams.limit);

    // Calculate pagination
    const startIndex = (validParams.page - 1) * validParams.limit;
    const endIndex = startIndex + validParams.limit;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    return NextResponse.json({
      jobs: paginatedJobs,
      pagination: {
        page: validParams.page,
        limit: validParams.limit,
        total: jobs.length,
        totalPages: Math.ceil(jobs.length / validParams.limit)
      }
    });

  } catch (error) {
    console.error('Error in GET /api/jobs:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid query parameters', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = CreateJobSchema.parse(body);

    // Submit job to Python service
    const jobId = await jobsAPI.submitJob(
      validatedData.repo_path,
      validatedData.priority,
      validatedData.config
    );

    return NextResponse.json(
      { 
        job_id: jobId,
        message: 'Job submitted successfully',
        status: 'queued'
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