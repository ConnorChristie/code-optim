from typing import Dict, Any
import time
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
import logging
from langchain.tools import Tool
from langgraph.prebuilt import ToolExecutor
from .base import BaseAgent, AgentState
from ..utils.docker_runner import DockerRunner
from ..core.config import get_settings

logger = logging.getLogger(__name__)

class HotspotInfo(BaseModel):
    file_path: str = Field(description="Path to the file containing the hotspot")
    line_start: int = Field(description="Starting line number of the hotspot")
    line_end: int = Field(description="Ending line number of the hotspot")
    severity: float = Field(description="Performance impact severity (0-1)")
    description: str = Field(description="Description of the performance issue")
    suggested_fix: str = Field(description="High-level suggestion for fixing the issue")
    estimated_improvement: float = Field(description="Estimated performance improvement percentage")
    code_context: str = Field(description="The code segment being analyzed")

class AnalyzerAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="analyzer",
            timeout_s=180,  # 3 minutes
            cost_limit=0.10  # $0.10 per analysis
        )
        
        self.settings = get_settings()
        self.docker = DockerRunner(base_image=self.settings.DOCKER_BASE_IMAGE)
        
        self.tools = [
            Tool(
                name="list_files",
                description="List all files in the repository",
                func=self._tool_list_files,
            ),
            Tool(
                name="read_file",
                description="Read the contents of a file",
                func=self._tool_read_file,
            ),
            Tool(
                name="run_command",
                description="Run any command in the Docker container",
                func=self._tool_run_command,
            )
        ]
        
        self.tool_executor = ToolExecutor(tools=self.tools)
        
        self.llm = ChatOpenAI(
            model=self.settings.ANALYZER_LLM.model,
            temperature=self.settings.ANALYZER_LLM.temperature,
            max_tokens=self.settings.ANALYZER_LLM.max_tokens,
        ).bind_tools(self.tools)
        
        self.prompt = ChatPromptTemplate.from_messages([
            ("system", """You are a performance optimization expert analyzing code for potential bottlenecks.
Your task is to analyze code without running it, using static analysis and best practices.

You have access to the following tools:
- list_files: List all files in the repository
- read_file: Read the contents of a file
- run_command: Run any command in the Docker container

Focus on identifying:
1. Algorithmic inefficiencies (e.g., O(n²) when O(n) is possible)
2. Resource-intensive operations (e.g., nested loops, redundant computations)
3. Memory management issues (e.g., large object allocations, memory leaks)
4. Unnecessary computations (e.g., repeated calculations, unused results)
5. I/O bottlenecks (e.g., repeated file operations, unoptimized database queries)
6. Concurrency issues (e.g., lock contention, thread safety)
7. Data structure misuse (e.g., wrong collection type for the use case)
8. Cache-unfriendly patterns (e.g., random access in large arrays)

For each issue found, provide:
- Precise location (file and line numbers)
- Severity (0-1 scale)
- Clear description of the problem
- Suggested fix approach
- Estimated performance improvement
- Explanation of why it's a performance issue

Base your analysis on:
- Code complexity
- Algorithm selection
- Data structure usage
- Resource utilization patterns
- Common performance anti-patterns
- Language-agnostic best practices"""),
            ("user", "Analyze the code in the repository for performance hotspots.")
        ])
        
        self.output_parser = PydanticOutputParser(pydantic_object=HotspotInfo)
    
    async def _tool_list_files(self) -> Dict[str, Any]:
        """Tool for listing files in the repository"""
        result = await self.docker.run_command(
            "find . -type f -not -path '*/\\.*' -exec file {} \\;",
            timeout=60
        )
        return {"files": [line.split(":")[0].strip("./") for line in result["stdout"].split("\n") if line]}
    
    async def _tool_read_file(self, file_path: str) -> Dict[str, Any]:
        """Tool for reading file contents"""
        result = await self.docker.run_command(f"cat {file_path}")
        if result["exit_code"] != 0:
            return {"error": result["stderr"]}
        return {"content": result["stdout"]}
    
    async def _tool_run_command(self, command: str) -> Dict[str, Any]:
        """Tool for running any command in the Docker container"""
        result = await self.docker.run_command(command)
        return {
            "stdout": result["stdout"],
            "stderr": result["stderr"],
            "exit_code": result["exit_code"]
        }
    
    async def process(self, state: AgentState, **kwargs) -> Dict[str, Any]:
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            if not repo_path:
                raise ValueError("repo_path is required")
            
            await self.docker.setup_environment(repo_path)
            
            chain = self.prompt | self.llm
            result = await chain.ainvoke({})
            
            hotspots = []
            if isinstance(result, list):
                hotspots = [self.output_parser.parse(h) for h in result]
            else:
                hotspots = [self.output_parser.parse(result)]
            
            hotspots.sort(key=lambda x: x.severity, reverse=True)
            
            state.time_used = time.time() - start_time
            state.iterations += 1
            
            return {
                "status": "success",
                "hotspots": [h.dict() for h in hotspots]
            }
            
        except Exception as e:
            logger.error(f"Analysis failed: {str(e)}", exc_info=True)
            return {"status": "failed", "error": str(e)}
            
        finally:
            await self.docker.cleanup()
    
    async def cleanup(self) -> None:
        await self.docker.cleanup() 