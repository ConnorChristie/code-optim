'use client'

import { useState } from 'react'
import JobList from '../components/JobList'
import JobDetails from '../components/JobDetails'
import { ApiClient } from '../lib/api'

const apiClient = new ApiClient()

export default function Home() {
  const [repoUrl, setRepoUrl] = useState('')
  const [branch, setBranch] = useState('')
  const [commitHash, setCommitHash] = useState('')
  const [selectedJob, setSelectedJob] = useState<{ id: string; queueName: string } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await apiClient.startOptimization(repoUrl, branch, commitHash || undefined)
      setRepoUrl('')
      setBranch('')
      setCommitHash('')
    } catch (err) {
      setError('Failed to start optimization')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Code Optimization Monitor</h1>
      
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700">
              Repository URL
            </label>
            <input
              type="text"
              id="repoUrl"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="commitHash" className="block text-sm font-medium text-gray-700">
              Commit Hash (optional)
            </label>
            <input
              type="text"
              id="commitHash"
              value={commitHash}
              onChange={(e) => setCommitHash(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {submitting ? 'Starting...' : 'Start Optimization'}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Jobs</h2>
          <JobList onSelectJob={setSelectedJob} />
        </div>
        
        {selectedJob && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Job Details</h2>
            <JobDetails jobId={selectedJob.id} queueName={selectedJob.queueName} />
          </div>
        )}
      </div>
    </main>
  )
}
