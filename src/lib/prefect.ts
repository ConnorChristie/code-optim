export class PrefectAPI {
  private baseUrl: string;
  private apiKey: string | undefined;
  private deploymentName = 'Optimization Workflow/optimization_flow';

  constructor() {
    this.baseUrl = process.env.PREFECT_API_URL || 'http://localhost:4200/api';
    this.apiKey = process.env.PREFECT_API_KEY;
  }

  private async _request<T>(path: string, opts: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(opts.headers as Record<string, string> | undefined)
    };
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      ...opts,
      headers
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Prefect API error (${response.status}): ${text}`);
    }

    return response.json();
  }

  private async getDeploymentId(): Promise<string> {
    const response = await this._request<{ id: string }>(`/deployments/name/${encodeURIComponent(this.deploymentName)}`);
    return response.id;
  }

  async createFlowRun(repoPath: string, config: Record<string, any>): Promise<string> {
    const deploymentId = await this.getDeploymentId();
    const response = await this._request<{ id: string }>(`/deployments/${deploymentId}/create_flow_run`, {
      method: 'POST',
      body: JSON.stringify({
        parameters: {
          repo_path: repoPath,
          config
        }
      })
    });
    return response.id;
  }

  async getFlowRun(flowRunId: string): Promise<any> {
    return this._request(`/flow_runs/${flowRunId}`);
  }

  async getFlowRunState(flowRunId: string): Promise<any> {
    const flowRun = await this.getFlowRun(flowRunId);
    return flowRun.state;
  }

  async listFlowRuns(
    state?: string,
    limit: number = 100,
    page: number = 1
  ): Promise<any[]> {
    interface FlowRunsResponse {
      results: any[];
    }

    try {
      const deploymentId = await this.getDeploymentId();
      const response = await this._request<FlowRunsResponse>('/flow_runs/paginate', {
        method: 'POST',
        body: JSON.stringify({
          limit,
          page,
          deployments: {
            id: {
              any_: [deploymentId]
            }
          },
          sort: 'START_TIME_DESC'
        })
      });

      return response?.results || [];
    } catch (error) {
      console.error('Error fetching flow runs:', error);
      return [];
    }
  }
}

// Export a singleton instance
export const prefectAPI = new PrefectAPI();

// Export status mapping
export const statusMap: Record<string, string> = {
  pending: 'PENDING',
  queued: 'SCHEDULED',
  running: 'RUNNING',
  paused: 'PAUSED',
  completed: 'COMPLETED',
  failed: 'FAILED',
  cancelled: 'CANCELLED'
}; 