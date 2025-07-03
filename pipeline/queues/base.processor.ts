import { Job, Worker, QueueScheduler } from 'bullmq'
import { QUEUE_CONFIG } from '../config/queue.config'

export abstract class BaseProcessor {
  protected worker: Worker
  protected scheduler: QueueScheduler

  constructor(queueName: string) {
    this.worker = new Worker(
      queueName,
      this.process.bind(this),
      {
        ...QUEUE_CONFIG,
        concurrency: 5,
        removeOnComplete: {
          count: 1000
        },
        removeOnFail: {
          count: 5000
        }
      }
    )

    this.scheduler = new QueueScheduler(queueName, QUEUE_CONFIG)

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
  }

  async close(): Promise<void> {
    await this.worker.close()
    await this.scheduler.close()
  }
} 