import { config } from 'dotenv'
import { QueueManager } from './queues/queue.manager'
import { RepositoryProcessor } from './queues/processors/repository.processor'

// Load environment variables
config()

async function main() {
  // Initialize queue manager and processors
  const queueManager = new QueueManager()
  const repoProcessor = new RepositoryProcessor()

  try {
    // Start an optimization pipeline
    const flow = await queueManager.startOptimizationPipeline(
      'https://github.com/example/repo',
      'main'
    )

    console.log('Started optimization pipeline:', flow.id)

    // Example of checking job status
    const job = await queueManager.getJobStatus(flow.queueName, flow.id)
    console.log('Job status:', job?.status)

    // Keep the process running to process jobs
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