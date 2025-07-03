import { Queue, FlowProducer, Job } from 'bullmq'
import { QUEUE_CONFIG, QUEUES } from '../config/queue.config'

export class QueueManager {
  private queues: Map<string, Queue>
  private flowProducer: FlowProducer

  constructor() {
    this.queues = new Map()
    this.flowProducer = new FlowProducer(QUEUE_CONFIG)

    Object.values(QUEUES).forEach(queueName => {
      this.queues.set(queueName, new Queue(queueName, QUEUE_CONFIG))
    })
  }

  async startOptimizationPipeline(repoUrl: string, branch: string, commitHash?: string) {
    const flow = await this.flowProducer.add({
      name: 'optimization-pipeline',
      queueName: QUEUES.REPOSITORY,
      data: {
        repoUrl,
        branch,
        commitHash
      },
      children: [
        {
          name: 'test-generation',
          queueName: QUEUES.TEST_GENERATION,
          data: {
            repoUrl,
            branch
          }
        },
        {
          name: 'code-optimization',
          queueName: QUEUES.OPTIMIZATION,
          data: {
            repoUrl,
            branch
          },
          children: [
            {
              name: 'performance-benchmarking',
              queueName: QUEUES.BENCHMARKING,
              data: {
                repoUrl,
                branch
              },
              children: [
                {
                  name: 'report-generation',
                  queueName: QUEUES.REPORTING,
                  data: {
                    repoUrl,
                    branch
                  }
                }
              ]
            }
          ]
        }
      ]
    })

    return flow
  }

  async getJobStatus(queueName: string, jobId: string): Promise<Job | null> {
    const queue = this.queues.get(queueName)
    if (!queue) {
      throw new Error(`Queue ${queueName} not found`)
    }
    const job = await queue.getJob(jobId)
    return job || null
  }

  async close(): Promise<void> {
    await Promise.all([
      ...Array.from(this.queues.values()).map(queue => queue.close()),
      this.flowProducer.close()
    ])
  }
} 