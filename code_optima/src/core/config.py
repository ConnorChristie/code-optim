from pydantic_settings import BaseSettings
from pydantic import ConfigDict
from typing import Dict, Optional
from functools import lru_cache

class LLMConfig(BaseSettings):
    model: str
    temperature: float = 0.0
    max_tokens: Optional[int] = None
    top_p: float = 1.0
    presence_penalty: float = 0.0
    frequency_penalty: float = 0.0

class Settings(BaseSettings):
    model_config = ConfigDict(env_file=".env")
    
    OPENAI_API_KEY: str
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    REDIS_DB: int = 0
    
    # Agent-specific LLM configurations
    ANALYZER_LLM: LLMConfig = LLMConfig(
        model="gpt-4-turbo-preview",
        temperature=0.2
    )
    REFACTOR_LLM: LLMConfig = LLMConfig(
        model="gpt-4-turbo-preview",
        temperature=0.1
    )
    REVIEWER_LLM: LLMConfig = LLMConfig(
        model="gpt-3.5-turbo",
        temperature=0.3
    )
    
    # Docker configuration
    DOCKER_BASE_IMAGE: str = "python:3.9-slim"
    DOCKER_TIMEOUT: int = 300  # 5 minutes
    DOCKER_MEMORY_LIMIT: str = "2g"
    
    # Budget and performance settings
    MAX_SPEND_PER_REPO: float = 10.0
    MAX_CONCURRENCY: int = 2
    PERF_TARGET_PCT: float = 5.0
    MAX_WALL_CLOCK_HOURS: int = 2
    
    # Observability settings
    PROMETHEUS_PORT: int = 9090
    LOKI_HOST: str = "localhost"
    LOKI_PORT: int = 3100
    OTEL_ENDPOINT: str = "http://localhost:4317"
    
    CELERY_BROKER_URL: str = "redis://localhost:6379/1"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/1"

@lru_cache()
def get_settings() -> Settings:
    return Settings() 