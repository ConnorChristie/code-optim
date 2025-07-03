import { WorkerManager } from './workers/worker.manager'

const workerManager = new WorkerManager()

process.on('SIGTERM', async () => {
  await workerManager.close()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await workerManager.close()
  process.exit(0)
}) 