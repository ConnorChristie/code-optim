import { Worker, Job, Queue } from 'bullmq'
import { QUEUE_CONFIG } from '../config/queue.config'

export abstract class BaseProcessor {
  protected worker: Worker
  protected queue: Queue

  constructor(queueName: string) {
    this.queue = new Queue(queueName, {
      connection: QUEUE_CONFIG.connection
    })

    this.worker = new Worker(
      queueName,
      this.process.bind(this),
      {
        connection: QUEUE_CONFIG.connection,
        concurrency: 5,
        removeOnComplete: {
          count: 1000,
          age: 24 * 3600
        },
        removeOnFail: {
          count: 5000,
          age: 24 * 3600 * 7
        },
        lockDuration: 30000,
        maxStalledCount: 10
      }
    )

    this.setupListeners()
  }

  protected abstract process(job: Job): Promise<any>

  private setupListeners(): void {
    this.worker.on('completed', (job) => {
      console.log(`Job ${job.id} completed in queue ${job.queueName}`)
    })

    this.worker.on('failed', (job, error) => {
      console.error(
        `Job ${job?.id} failed in queue ${job?.queueName}: ${error.message}`
      )
    })

    this.worker.on('error', (error) => {
      console.error(`Worker error: ${error}`)
    })

    this.worker.on('stalled', (jobId) => {
      console.warn(`Job ${jobId} has stalled`)
    })
  }

  async close(): Promise<void> {
    await this.worker.close()
    await this.queue.close()
  }
} 