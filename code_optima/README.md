# Code Optima

An AI-powered code optimization system that uses LangGraph and LLMs to analyze and improve code performance.

## Features

- Automated code analysis and optimization
- Performance metrics tracking
- Redis Pub/Sub-based job processing
- Prometheus metrics integration
- OpenTelemetry tracing support

## Prerequisites

- Python 3.9+
- Redis server
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd code_optima
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file with your configuration:
```env
OPENAI_API_KEY=your_api_key_here
REDIS_HOST=localhost
REDIS_PORT=6379
MAX_SPEND_PER_REPO=10.0
PERF_TARGET_PCT=5.0
```

## Running the Service

1. Start Redis server:
```bash
redis-server
```

2. Start the optimization service:
```bash
python -m src.service
```

## Usage

The service listens to the Redis channel `optimization_requests` for new optimization jobs. To submit a job, publish a message to this channel with the following format:

```python
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)
r.publish('optimization_requests', json.dumps({
    'job_id': 'optional_custom_id',
    'repo_path': '/path/to/repo',
    'config': {
        'max_spend': 5.0,
        'perf_target': 10.0
    }
}))
```

### Job Results

Results are stored in Redis using the key pattern `optimization_results:{job_id}`. You can retrieve results using:

```python
result = r.hgetall(f'optimization_results:{job_id}')
```

### Job Events

The service publishes events to the `optimization_events` channel. Subscribe to this channel to receive real-time updates:

```python
pubsub = r.pubsub()
pubsub.subscribe('optimization_events')
for message in pubsub.listen():
    if message['type'] == 'message':
        event = json.loads(message['data'])
        print(f"Received event: {event}")
```

## Monitoring

- Prometheus metrics available at `/metrics`
- Grafana dashboard templates in `dashboards/`
- OpenTelemetry traces exported to configured backend

## Development

1. Install development dependencies:
```bash
pip install -r requirements-dev.txt
```

2. Run tests:
```bash
pytest
```

3. Run linting:
```bash
flake8 src tests
```

## Architecture

The system consists of several components:

1. **Redis Pub/Sub**: Message broker for job processing
2. **LangGraph Orchestrator**: Manages the optimization workflow
3. **Agents**:
   - Baseline Builder: Builds and tests the initial codebase
   - (More agents to be implemented)
4. **Metrics**: Prometheus + OpenTelemetry for observability

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details 