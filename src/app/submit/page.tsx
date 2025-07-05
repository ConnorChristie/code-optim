'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SubmitOptimizationPage() {
  const [url, setUrl] = useState('https://github.com/gocolly/colly')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const resp = await fetch('/api/optimizations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubUrl: url })
      })

      if (!resp.ok) {
        const data = await resp.json()
        throw new Error(data.error || 'Failed to submit job')
      }

      const { jobId } = await resp.json()
      // Redirect to dashboard (could filter by job)
      router.push(`/dashboard?newJobId=${jobId}`)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Start a new Optimization</h1>
      <form onSubmit={submit} className="w-full max-w-md space-y-4">
        <input
          type="url"
          placeholder="GitHub repository URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Submitting…' : 'Optimize'}
        </button>
      </form>
    </div>
  )
} 