import os
import time
import openai
import langgraph
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv('DATABASE_URL')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY

# --- Database helpers ---
def get_db():
    return psycopg2.connect(DB_URL)

def fetch_next_job(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT id FROM \"OptimizationJob\" WHERE status = 'QUEUED' ORDER BY createdAt LIMIT 1;")
        row = cur.fetchone()
        return row[0] if row else None

def update_job_status(conn, job_id, status, error=None):
    with conn.cursor() as cur:
        cur.execute("UPDATE \"OptimizationJob\" SET status = %s, error = %s WHERE id = %s;", (status, error, job_id))
        conn.commit()

def record_metric(conn, job_id, metric_name, metric_value, metric_unit, stage):
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO \"JobMetric\" (id, \"jobId\", \"metricName\", \"metricValue\", \"metricUnit\", stage, \"createdAt\") VALUES (gen_random_uuid(), %s, %s, %s, %s, %s, NOW());",
            (job_id, metric_name, metric_value, metric_unit, stage)
        )
        conn.commit()

# --- LangGraph node functions ---
def baseline_node(state):
    job_id = state['job_id']
    conn = state['conn']
    print(f"[baseline] Running baseline for job {job_id}")
    # Simulate LLM call
    time.sleep(1)
    record_metric(conn, job_id, 'build_time', 12000, 'ms', 'baseline')
    record_metric(conn, job_id, 'test_time', 8000, 'ms', 'baseline')
    return {**state, 'baseline_done': True}

def analyze_node(state):
    job_id = state['job_id']
    conn = state['conn']
    print(f"[analyze] Analyzing hotspots for job {job_id}")
    # Simulate LLM call
    time.sleep(1)
    record_metric(conn, job_id, 'hotspots_found', 3, 'count', 'analyze')
    return {**state, 'analyze_done': True}

def refactor_node(state):
    job_id = state['job_id']
    conn = state['conn']
    print(f"[refactor] Refactoring code for job {job_id}")
    # Simulate LLM call
    time.sleep(1)
    record_metric(conn, job_id, 'patches_generated', 1, 'count', 'refactor')
    return {**state, 'refactor_done': True}

def compile_test_node(state):
    job_id = state['job_id']
    conn = state['conn']
    print(f"[compile_test] Compiling and testing for job {job_id}")
    # Simulate build/test
    time.sleep(1)
    record_metric(conn, job_id, 'tests_passed', 10, 'count', 'compile_test')
    return {**state, 'compile_test_done': True}

def benchmark_node(state):
    job_id = state['job_id']
    conn = state['conn']
    print(f"[benchmark] Benchmarking for job {job_id}")
    # Simulate LLM call
    time.sleep(1)
    record_metric(conn, job_id, 'performance_improvement', 6.0, 'percent', 'benchmark')
    return {**state, 'benchmark_done': True}

def review_node(state):
    job_id = state['job_id']
    print(f"[review] Reviewing results for job {job_id}")
    # Simulate LLM call
    time.sleep(1)
    return {**state, 'review_done': True}

# --- Guards ---
def improvement_guard(state):
    # Example: terminate if improvement >= 5%
    conn = state['conn']
    job_id = state['job_id']
    with conn.cursor() as cur:
        cur.execute("SELECT AVG(\"metricValue\") FROM \"JobMetric\" WHERE \"jobId\" = %s AND \"metricName\" = 'performance_improvement';", (job_id,))
        avg = cur.fetchone()[0]
        if avg and avg >= 5.0:
            print(f"[guard] Improvement target met: {avg:.2f}%")
            return True
    return False

def budget_guard(state):
    # Example: terminate if cost > $10
    conn = state['conn']
    job_id = state['job_id']
    with conn.cursor() as cur:
        cur.execute("SELECT SUM(\"metricValue\") FROM \"JobMetric\" WHERE \"jobId\" = %s AND \"metricName\" = 'cost_usd';", (job_id,))
        total = cur.fetchone()[0]
        if total and total > 10.0:
            print(f"[guard] Budget exceeded: ${total:.2f}")
            return True
    return False

# --- LangGraph pipeline ---
def run_langgraph_pipeline(job_id, conn):
    print(f"[LangGraph] Running pipeline for job {job_id}")
    g = langgraph.Graph()
    g.add(langgraph.Node('baseline', baseline_node))
    g.add(langgraph.Node('analyze', analyze_node))
    g.add(langgraph.Node('refactor', refactor_node))
    g.add(langgraph.Node('compile_test', compile_test_node))
    g.add(langgraph.Node('benchmark', benchmark_node))
    g.add(langgraph.Node('review', review_node))

    # Edges
    g.connect('baseline', 'analyze')
    g.connect('analyze', 'refactor')
    g.connect('refactor', 'compile_test')
    g.connect('compile_test', 'benchmark')
    g.connect('benchmark', ['review', 'terminal'], guard=improvement_guard)
    g.connect('benchmark', 'terminal', guard=budget_guard)
    g.connect('review', 'terminal')

    # Run
    state = {'job_id': job_id, 'conn': conn}
    g.run(state)
    print(f"[LangGraph] Completed job {job_id}")

# --- Main loop ---
if __name__ == '__main__':
    conn = get_db()
    while True:
        job_id = fetch_next_job(conn)
        if job_id:
            update_job_status(conn, job_id, 'RUNNING')
            try:
                run_langgraph_pipeline(job_id, conn)
                update_job_status(conn, job_id, 'COMPLETED')
            except Exception as e:
                print(f"[error] {e}")
                update_job_status(conn, job_id, 'FAILED', str(e))
        else:
            print("No queued jobs. Sleeping...")
            time.sleep(10) 