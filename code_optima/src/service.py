import redis
import json
import asyncio
import signal
import sys
from typing import Dict, Any, Optional
import logging
from datetime import datetime

from .core.config import get_settings
from .core.orchestrator import OptimizationOrchestrator

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class OptimizationService:
    def __init__(self):
        self.settings = get_settings()
        self.redis_client = redis.Redis(
            host=self.settings.REDIS_HOST,
            port=self.settings.REDIS_PORT,
            db=self.settings.REDIS_DB
        )
        self.pubsub = self.redis_client.pubsub()
        self.orchestrator = OptimizationOrchestrator()
        self.running = False
        
        # Setup signal handlers
        signal.signal(signal.SIGINT, self._handle_shutdown)
        signal.signal(signal.SIGTERM, self._handle_shutdown)
    
    def _handle_shutdown(self, signum, frame):
        """Handle graceful shutdown on signals"""
        logger.info("Received shutdown signal, cleaning up...")
        self.running = False
        self.pubsub.close()
        self.redis_client.close()
        sys.exit(0)
    
    async def process_message(self, message: Dict[str, Any]) -> None:
        """Process a single optimization message"""
        try:
            job_id = message.get("job_id") or f"job_{int(datetime.now().timestamp())}"
            repo_path = message.get("repo_path")
            config = message.get("config", {})
            
            if not repo_path:
                raise ValueError("repo_path is required")
            
            logger.info(f"Starting optimization job {job_id} for {repo_path}")
            
            # Run optimization
            result = await self.orchestrator.run_optimization(repo_path)
            
            # Store result in Redis
            self.redis_client.hset(
                f"optimization_results:{job_id}",
                mapping={
                    "status": "completed",
                    "result": json.dumps(result),
                    "completed_at": datetime.now().isoformat()
                }
            )
            
            # Publish completion event
            self.redis_client.publish(
                "optimization_events",
                json.dumps({
                    "type": "job_completed",
                    "job_id": job_id,
                    "status": "success"
                })
            )
            
            logger.info(f"Completed optimization job {job_id}")
            
        except Exception as e:
            logger.error(f"Error processing job: {str(e)}", exc_info=True)
            
            # Store error in Redis
            self.redis_client.hset(
                f"optimization_results:{job_id}",
                mapping={
                    "status": "failed",
                    "error": str(e),
                    "failed_at": datetime.now().isoformat()
                }
            )
            
            # Publish error event
            self.redis_client.publish(
                "optimization_events",
                json.dumps({
                    "type": "job_failed",
                    "job_id": job_id,
                    "error": str(e)
                })
            )
    
    async def run(self) -> None:
        """Main service loop"""
        try:
            # Subscribe to optimization requests channel
            self.pubsub.subscribe("optimization_requests")
            logger.info("Service started, listening for optimization requests...")
            
            self.running = True
            while self.running:
                message = self.pubsub.get_message()
                if message and message["type"] == "message":
                    try:
                        data = json.loads(message["data"])
                        await self.process_message(data)
                    except json.JSONDecodeError:
                        logger.error("Invalid JSON message received")
                    except Exception as e:
                        logger.error(f"Error processing message: {str(e)}", exc_info=True)
                
                await asyncio.sleep(0.1)  # Prevent busy-waiting
                
        except Exception as e:
            logger.error(f"Service error: {str(e)}", exc_info=True)
            self.running = False
        finally:
            self.pubsub.close()
            self.redis_client.close()

def main():
    """Entry point for the service"""
    service = OptimizationService()
    
    try:
        asyncio.run(service.run())
    except KeyboardInterrupt:
        logger.info("Service stopped by user")
    except Exception as e:
        logger.error(f"Service failed: {str(e)}", exc_info=True)
        sys.exit(1)

if __name__ == "__main__":
    main() 