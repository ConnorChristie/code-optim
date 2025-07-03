import { config } from 'dotenv'
import { QueueManager } from './queues/queue.manager'
import { RepositoryProcessor } from './queues/processors/repository.processor'

config()

async function main() {
  const queueManager = new QueueManager()
  const repoProcessor = new RepositoryProcessor()

  try {
    const flow = await queueManager.startOptimizationPipeline(
      'https://github.com/taskforcesh/bullmq',
      'master'
    )

    console.log('Started optimization pipeline:', flow.job.id)

    process.on('SIGINT', async () => {
      console.log('Shutting down...')
      await queueManager.close()
      await repoProcessor.close()
      process.exit(0)
    })
  } catch (error) {
    console.error('Error:', error)
    await queueManager.close()
    await repoProcessor.close()
    process.exit(1)
  }
}

main()
