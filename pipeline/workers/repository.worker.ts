import { Worker, Job } from 'bullmq'
import { QUEUE_CONFIG, QUEUES } from '../config/queue.config'
import { exec } from 'child_process'
import { promisify } from 'util'
import * as path from 'path'
import * as fs from 'fs/promises'

const execAsync = promisify(exec)

interface RepositoryJobData {
  repoUrl: string
  branch: string
  commitHash?: string
}

export class RepositoryWorker {
  private worker: Worker
  private workspaceDir: string

  constructor() {
    this.workspaceDir = process.env.WORKSPACE_DIR || '/workspace'
    this.worker = new Worker(
      QUEUES.REPOSITORY,
      async (job: Job<RepositoryJobData>) => {
        await this.processRepository(job)
      },
      QUEUE_CONFIG
    )

    this.worker.on('failed', (job, err) => {
      console.error(`Job ${job?.id} failed:`, err)
    })
  }

  private async processRepository(job: Job<RepositoryJobData>) {
    const { repoUrl, branch, commitHash } = job.data
    const repoName = repoUrl.split('/').pop()?.replace('.git', '') || 'repo'
    const workDir = path.join(this.workspaceDir, `${repoName}-${job.id}`)

    try {
      // Create workspace directory
      await fs.mkdir(workDir, { recursive: true })

      // Clone repository
      await execAsync(`git clone -b ${branch} ${repoUrl} ${workDir}`)
      
      if (commitHash) {
        await execAsync(`cd ${workDir} && git checkout ${commitHash}`)
      }

      // Run Codex CLI analysis in full-auto mode
      // We use the --approval-mode flag to run without requiring user input
      await execAsync(
        `cd ${workDir} && codex --approval-mode full-auto "Analyze this codebase and identify parts that could be optimized for performance. Focus on: 1) CPU-intensive operations 2) Memory usage 3) I/O operations 4) Algorithm complexity. Create a detailed report with specific file locations and suggestions for optimization."`
      )

      // Read the analysis results
      const analysisResults = await fs.readFile(path.join(workDir, 'OPTIMIZATION_REPORT.md'), 'utf-8')

      // Update job progress
      await job.updateProgress(100)

      // Return analysis results
      return {
        workDir,
        analysisResults
      }

    } catch (error) {
      console.error('Error processing repository:', error)
      throw error
    }
  }

  async close() {
    await this.worker.close()
  }
} 