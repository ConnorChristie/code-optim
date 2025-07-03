import { useEffect, useState } from 'react'
import { JobStatus } from '../types/queue'
import { ApiClient } from '../lib/api'

interface JobDetailsProps {
  jobId: string
  queueName: string
}

const apiClient = new ApiClient()

export default function JobDetails({ jobId, queueName }: JobDetailsProps) {
  const [job, setJob] = useState<JobStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobStatus = async () => {
      try {
        const status = await apiClient.getJobStatus(queueName, jobId)
        setJob(status)
        setError(null)
      } catch (err) {
        setError('Failed to fetch job status')
      } finally {
        setLoading(false)
      }
    }

    fetchJobStatus()
    const interval = setInterval(fetchJobStatus, 5000)
    return () => clearInterval(interval)
  }, [jobId, queueName])

  if (loading) {
    return <div className="flex justify-center p-8">Loading job details...</div>
  }

  if (error || !job) {
    return <div className="text-red-500 p-4">{error || 'Job not found'}</div>
  }

  const renderStage = (stage: JobStatus, level = 0) => (
    <div key={stage.id} className={`ml-${level * 4} mb-4`}>
      <div className="flex items-center gap-4">
        <div className={`w-3 h-3 rounded-full ${
          stage.status === 'completed' ? 'bg-green-500' :
          stage.status === 'failed' ? 'bg-red-500' :
          stage.status === 'active' ? 'bg-blue-500' :
          'bg-gray-300'
        }`} />
        <div className="flex-1">
          <h4 className="font-medium">{stage.name}</h4>
          <div className="mt-1">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all"
                style={{ width: `${stage.progress}%` }}
              />
            </div>
          </div>
        </div>
        <span className={`px-2 py-1 rounded text-xs ${
          stage.status === 'completed' ? 'bg-green-100 text-green-800' :
          stage.status === 'failed' ? 'bg-red-100 text-red-800' :
          stage.status === 'active' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {stage.status}
        </span>
      </div>
      {stage.children?.map(child => renderStage(child, level + 1))}
    </div>
  )

  return (
    <div className="border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{job.name}</h2>
        <div className="text-sm text-gray-600">
          <p>Repository: {job.data.repoUrl}</p>
          <p>Branch: {job.data.branch}</p>
          {job.data.commitHash && <p>Commit: {job.data.commitHash}</p>}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pipeline Stages</h3>
        {renderStage(job)}
      </div>
    </div>
  )
} 