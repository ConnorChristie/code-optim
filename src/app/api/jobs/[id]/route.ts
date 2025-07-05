import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for job actions
const JobActionSchema = z.object({
  action: z.enum(['cancel', 'pause', 'resume']),
  reason: z.string().optional()
});

class JobAPI {
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.PYTHON_API_URL || 'http://localhost:8000';
  }

  async getJobStatus(jobId: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/jobs/${jobId}/status`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching job status:', error);
      throw new Error('Failed to fetch job status');
    }
  }

  async performJobAction(jobId: string, action: string, reason?: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/jobs/${jobId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reason: reason || ''
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.success || false;
    } catch (error) {
      console.error(`Error performing job action ${action}:`, error);
      throw new Error(`Failed to ${action} job`);
    }
  }

  async cancelJob(jobId: string, reason?: string): Promise<boolean> {
    return this.performJobAction(jobId, 'cancel', reason);
  }

  async pauseJob(jobId: string, reason?: string): Promise<boolean> {
    return this.performJobAction(jobId, 'pause', reason);
  }

  async resumeJob(jobId: string): Promise<boolean> {
    return this.performJobAction(jobId, 'resume');
  }
}

const jobAPI = new JobAPI();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const jobId = (await params).id;

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    // Get job status from Python service
    const jobStatus = await jobAPI.getJobStatus(jobId);

    if (!jobStatus) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(jobStatus);

  } catch (error) {
    console.error('Error in GET /api/jobs/[id]:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const jobId = (await params).id;

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Validate request body
    const validatedData = JobActionSchema.parse(body);

    let result: boolean;
    let message: string;

    // Perform the requested action
    switch (validatedData.action) {
      case 'cancel':
        result = await jobAPI.cancelJob(jobId, validatedData.reason);
        message = result ? 'Job cancelled successfully' : 'Failed to cancel job';
        break;
      
      case 'pause':
        result = await jobAPI.pauseJob(jobId, validatedData.reason);
        message = result ? 'Job paused successfully' : 'Failed to pause job';
        break;
      
      case 'resume':
        result = await jobAPI.resumeJob(jobId);
        message = result ? 'Job resumed successfully' : 'Failed to resume job';
        break;
      
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    if (!result) {
      return NextResponse.json(
        { error: message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message,
      action: validatedData.action,
      job_id: jobId
    });

  } catch (error) {
    console.error('Error in POST /api/jobs/[id]:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request body', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const jobId = (await params).id;

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    // Cancel the job (equivalent to DELETE)
    const result = await jobAPI.cancelJob(jobId, 'Job deleted by user');

    if (!result) {
      return NextResponse.json(
        { error: 'Failed to delete job' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Job deleted successfully',
      job_id: jobId
    });

  } catch (error) {
    console.error('Error in DELETE /api/jobs/[id]:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 