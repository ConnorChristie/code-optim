import { QueueOptions } from 'bullmq'

export const REDIS_CONFIG = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD
}

export const QUEUE_CONFIG: QueueOptions = {
  connection: REDIS_CONFIG,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000
    },
    removeOnComplete: 100,
    removeOnFail: 100
  }
}

export const QUEUES = {
  REPOSITORY: 'repository-analysis',
  TEST_GENERATION: 'test-generation',
  OPTIMIZATION: 'code-optimization',
  BENCHMARKING: 'performance-benchmarking',
  REPORTING: 'report-generation'
} as const 