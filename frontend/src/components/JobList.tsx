import { useEffect, useState } from 'react'
import { JobStatus } from '../types/queue'
import { ApiClient } from '../lib/api'

interface JobListProps {
  onSelectJob: (job: { id: string; queueName: string } | null) => void
}

const apiClient = new ApiClient()

export default function JobList({ onSelectJob }: JobListProps) {
  const [jobs, setJobs] = useState<JobStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobList = await apiClient.getAllJobs()
        setJobs(jobList)
        setError(null)
      } catch (err) {
        setError('Failed to fetch jobs')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
    const interval = setInterval(fetchJobs, 5000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="flex justify-center p-8">Loading jobs...</div>
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>
  }

  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
        <div className="text-gray-500 text-center p-8">No jobs found</div>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onSelectJob({ id: job.id, queueName: job.queueName })}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{job.name}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                job.status === 'completed' ? 'bg-green-100 text-green-800' :
                job.status === 'failed' ? 'bg-red-100 text-red-800' :
                job.status === 'active' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {job.status}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Repository: {job.data.repoUrl}</p>
              <p>Branch: {job.data.branch}</p>
              {job.data.commitHash && <p>Commit: {job.data.commitHash}</p>}
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${job.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
} 