from typing import Dict, Any, Optional
from langchain.callbacks import BaseCallbackHandler
from langchain.schema import BaseMessage
from pydantic import BaseModel

class AgentState(BaseModel):
    job_id: str
    cost_used: float = 0.0
    time_used: float = 0.0
    improvement_pct: float = 0.0
    iterations: int = 0
    last_error: Optional[str] = None

class BaseAgent:
    def __init__(
        self,
        name: str,
        timeout_s: Optional[int] = None,
        cost_limit: Optional[float] = None,
        max_iterations: Optional[int] = None
    ):
        self.name = name
        self.timeout_s = timeout_s
        self.cost_limit = cost_limit
        self.max_iterations = max_iterations
        self.state = None
    
    async def initialize(self, job_id: str) -> AgentState:
        self.state = AgentState(job_id=job_id)
        return self.state
    
    async def process(self, state: AgentState, **kwargs) -> Dict[str, Any]:
        raise NotImplementedError("Subclasses must implement process method")
    
    async def cleanup(self) -> None:
        pass
    
    def _check_limits(self) -> Optional[str]:
        if not self.state:
            return None
            
        if self.timeout_s and self.state.time_used > self.timeout_s:
            return f"Timeout exceeded: {self.timeout_s}s"
            
        if self.cost_limit and self.state.cost_used > self.cost_limit:
            return f"Cost limit exceeded: ${self.cost_limit}"
            
        if self.max_iterations and self.state.iterations > self.max_iterations:
            return f"Max iterations exceeded: {self.max_iterations}"
            
        return None

class AgentCallback(BaseCallbackHandler):
    def __init__(self, agent_state: AgentState):
        self.state = agent_state
        
    def on_llm_start(self, *args, **kwargs):
        pass
        
    def on_llm_end(self, *args, **kwargs):
        pass
        
    def on_llm_error(self, error: str, **kwargs):
        if self.state:
            self.state.last_error = str(error)
            
    def on_chain_end(self, outputs: Dict[str, Any], **kwargs):
        if self.state and "cost" in outputs:
            self.state.cost_used += float(outputs["cost"]) 