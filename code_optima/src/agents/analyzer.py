from typing import Dict, Any, List
import time
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field
import logging
from langchain.tools import Tool
import json

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
            timeout_s=180,
            cost_limit=0.10
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
                name="write_file",
                description="Write content to a file in the container. Use this to create new files or modify existing ones.",
                func=self._tool_write_file,
            ),
            Tool(
                name="run_command",
                description="Run any command in the Docker container",
                func=self._tool_run_command,
            )
        ]
        
        self.llm = ChatOpenAI(
            model=self.settings.ANALYZER_LLM.model,
            temperature=self.settings.ANALYZER_LLM.temperature,
            max_tokens=self.settings.ANALYZER_LLM.max_tokens,
        ).bind_tools(self.tools)
        
        self.analysis_prompt = ChatPromptTemplate.from_messages([
            ("system", """You are a performance optimization expert. Analyze the repository for performance bottlenecks.

Use the available tools to:
1. List files in the repository
2. Read code files to understand the implementation
3. Write files to create test scripts or modified versions
4. Run commands to gather additional information about the codebase

The container persists between tool calls, so you can:
- Create test files to validate performance issues
- Write benchmark scripts
- Modify code temporarily to test improvements
- Run build/test commands

Focus on identifying:
- Algorithmic inefficiencies (O(n²) when O(n) possible)
- Resource-intensive operations (nested loops, redundant computations)
- Memory management issues
- Unnecessary computations
- I/O bottlenecks
- Data structure misuse

After analyzing the code, provide your findings as a JSON array of hotspots with this structure:
[
  {{
    "file_path": "path/to/file.py",
    "line_start": 10,
    "line_end": 20,
    "severity": 0.8,
    "description": "Description of the issue",
    "suggested_fix": "How to fix it",
    "estimated_improvement": 50.0,
    "code_context": "The problematic code snippet"
  }}
]

Start by listing the files in the repository."""),
            ("user", "Please analyze this repository for performance hotspots.")
        ])
        
        self.final_prompt = ChatPromptTemplate.from_messages([
            ("system", """Based on your analysis of the repository, provide a final JSON response with the performance hotspots you found.

Return ONLY a valid JSON array of hotspots with this exact structure:
[
  {{
    "file_path": "string",
    "line_start": number,
    "line_end": number,
    "severity": number_between_0_and_1,
    "description": "string",
    "suggested_fix": "string", 
    "estimated_improvement": number,
    "code_context": "string"
  }}
]

If no hotspots were found, return an empty array: []"""),
            ("user", "Based on your analysis, what are the performance hotspots? Respond with JSON only.")
        ])
    
    async def _tool_list_files(self) -> Dict[str, Any]:
        result = await self.docker.run_command(
            "find . -type f -not -path '*/\\.*' -exec file {} \\;",
            timeout=60
        )
        return {"files": [line.split(":")[0].strip("./") for line in result["stdout"].split("\n") if line]}
    
    async def _tool_read_file(self, file_path: str) -> Dict[str, Any]:
        result = await self.docker.run_command(f"cat {file_path}")
        if result["exit_code"] != 0:
            return {"error": result["stderr"]}
        return {"content": result["stdout"]}
    
    async def _tool_write_file(self, file_path: str, content: str) -> Dict[str, Any]:
        result = await self.docker.write_file(file_path, content)
        if result["exit_code"] != 0:
            return {"error": result["stderr"]}
        return {"success": True, "message": f"Successfully wrote to {file_path}"}
    
    async def _tool_run_command(self, command: str) -> Dict[str, Any]:
        result = await self.docker.run_command(command)
        return {
            "stdout": result["stdout"],
            "stderr": result["stderr"],
            "exit_code": result["exit_code"]
        }
    
    async def _execute_tool_calls(self, message):
        """Execute tool calls from the LLM response"""
        if not hasattr(message, 'tool_calls') or not message.tool_calls:
            return []
        
        tool_results = []
        for tool_call in message.tool_calls:
            tool_name = tool_call['name']
            tool_args = tool_call['args']
            
            tool_func = None
            for tool in self.tools:
                if tool.name == tool_name:
                    tool_func = tool.func
                    break
            
            if tool_func:
                try:
                    result = await tool_func(**tool_args)
                    tool_results.append({
                        "tool": tool_name,
                        "args": tool_args,
                        "result": result
                    })
                except Exception as e:
                    tool_results.append({
                        "tool": tool_name,
                        "args": tool_args,
                        "error": str(e)
                    })
        
        return tool_results
    
    async def process(self, state: AgentState, **kwargs) -> Dict[str, Any]:
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            if not repo_path:
                raise ValueError("repo_path is required")
            
            await self.docker.setup_environment(repo_path)
            
            # Step 1: Initial analysis with tools
            analysis_response = await self.analysis_prompt.ainvoke({})
            llm_response = await self.llm.ainvoke(analysis_response.messages)
            
            # Execute any tool calls
            tool_results = await self._execute_tool_calls(llm_response)
            
            # Step 2: Get final analysis
            final_response = await self.final_prompt.ainvoke({})
            final_llm = ChatOpenAI(
                model=self.settings.ANALYZER_LLM.model,
                temperature=0.1,
                max_tokens=2000,
            )
            final_result = await final_llm.ainvoke(final_response.messages)
            
            # Parse the JSON response
            try:
                hotspots_data = json.loads(final_result.content)
                if not isinstance(hotspots_data, list):
                    hotspots_data = []
            except json.JSONDecodeError:
                logger.warning("Failed to parse JSON response, returning empty hotspots")
                hotspots_data = []
            
            # Convert to HotspotInfo objects and validate
            hotspots = []
            for hotspot_dict in hotspots_data:
                try:
                    hotspot = HotspotInfo(**hotspot_dict)
                    hotspots.append(hotspot)
                except Exception as e:
                    logger.warning(f"Invalid hotspot data: {e}")
                    continue
            
            # Sort by severity
            hotspots.sort(key=lambda x: x.severity, reverse=True)
            
            state.time_used = time.time() - start_time
            state.iterations += 1
            
            return {
                "status": "success",
                "hotspots": [h.dict() for h in hotspots],
                "tool_results": tool_results
            }
            
        except Exception as e:
            logger.error(f"Analysis failed: {str(e)}", exc_info=True)
            return {"status": "failed", "error": str(e)}
            
        finally:
            await self.docker.cleanup()
    
    async def cleanup(self) -> None:
        await self.docker.cleanup() 