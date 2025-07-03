import { RepositoryWorker } from './repository.worker'

export class WorkerManager {
  private repositoryWorker: RepositoryWorker

  constructor() {
    this.repositoryWorker = new RepositoryWorker()
  }

  async close() {
    await this.repositoryWorker.close()
  }
} 