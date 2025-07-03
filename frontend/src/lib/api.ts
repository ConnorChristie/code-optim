import { JobData, JobStatus, PipelineStage } from '../types/queue'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export class ApiClient {
  async startOptimization(repoUrl: string, branch: string, commitHash?: string): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/optimization`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ repoUrl, branch, commitHash }),
    })

    if (!response.ok) {
      throw new Error('Failed to start optimization')
    }

    const data = await response.json()
    return data.jobId
  }

  async getJobStatus(queueName: string, jobId: string): Promise<JobStatus | null> {
    const response = await fetch(`${API_BASE_URL}/jobs/${queueName}/${jobId}`)

    if (!response.ok) {
      throw new Error('Failed to fetch job status')
    }

    return response.json()
  }

  async getAllJobs(): Promise<JobStatus[]> {
    const response = await fetch(`${API_BASE_URL}/jobs`)

    if (!response.ok) {
      throw new Error('Failed to fetch jobs')
    }

    return response.json()
  }
} 