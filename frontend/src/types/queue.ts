export interface JobData {
  repoUrl: string
  branch: string
  commitHash?: string
}

export interface PipelineStage {
  name: string
  queueName: string
  data: JobData
  children?: PipelineStage[]
}

export interface JobStatus {
  id: string
  name: string
  queueName: string
  data: JobData
  status: 'waiting' | 'active' | 'completed' | 'failed'
  progress: number
  timestamp: number
  children?: JobStatus[]
}

export interface QueueNames {
  REPOSITORY: string
  TEST_GENERATION: string
  OPTIMIZATION: string
  BENCHMARKING: string
  REPORTING: string
} 