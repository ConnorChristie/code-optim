import { NextRequest, NextResponse } from 'next/server';

class StatsAPI {
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.PYTHON_API_URL || 'http://localhost:8000';
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

  async getSystemHealth(): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/health`, {
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
      console.error('Error fetching system health:', error);
      // Return default health status if service is not available
      return {
        status: 'unhealthy',
        message: 'Unable to connect to processing service'
      };
    }
  }
}

const statsAPI = new StatsAPI();

export async function GET(request: NextRequest) {
  try {
    // Get queue statistics and system health in parallel
    const [queueStats, healthStatus] = await Promise.allSettled([
      statsAPI.getQueueStats(),
      statsAPI.getSystemHealth()
    ]);

    const stats = {
      queue: queueStats.status === 'fulfilled' ? queueStats.value : {
        queued_jobs: 0,
        priority_jobs: 0,
        active_jobs: 0,
        paused_jobs: 0,
        total_jobs: 0,
        max_concurrency: 2,
        error: 'Failed to fetch queue stats'
      },
      system: healthStatus.status === 'fulfilled' ? healthStatus.value : {
        status: 'unhealthy',
        message: 'Unable to connect to processing service'
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(stats);

  } catch (error) {
    console.error('Error in GET /api/jobs/stats:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        queue: {
          queued_jobs: 0,
          priority_jobs: 0,
          active_jobs: 0,
          paused_jobs: 0,
          total_jobs: 0,
          max_concurrency: 2,
          error: 'Service unavailable'
        },
        system: {
          status: 'unhealthy',
          message: 'Service unavailable'
        },
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 