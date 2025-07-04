from typing import Dict, Any, List, Optional
import time
import os
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
import logging

from .base import BaseAgent, AgentState
from ..utils.docker_runner import DockerRunner
from ..core.config import get_settings

logger = logging.getLogger(__name__)

class CodeChange(BaseModel):
    file_path: str = Field(description="Path to the file being modified")
    original_code: str = Field(description="Original code snippet")
    optimized_code: str = Field(description="Optimized code snippet")
    line_start: int = Field(description="Starting line number of the change")
    line_end: int = Field(description="Ending line number of the change")
    description: str = Field(description="Description of the optimization")
    expected_improvement: float = Field(description="Expected performance improvement percentage")
    safety_check: Dict[str, Any] = Field(description="Safety checks for the optimization")

class RefactorAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="refactor",
            timeout_s=300,  # 5 minutes
            cost_limit=1.00,  # $1.00 per refactor
            max_iterations=5  # Max 5 refactor attempts
        )
        
        self.settings = get_settings()
        self.docker = DockerRunner(base_image=self.settings.DOCKER_BASE_IMAGE)
        
        # Initialize LLM
        self.llm = ChatOpenAI(
            model=self.settings.REFACTOR_LLM.model,
            temperature=self.settings.REFACTOR_LLM.temperature,
            max_tokens=self.settings.REFACTOR_LLM.max_tokens,
        )
        
        # Initialize prompt template
        self.prompt = ChatPromptTemplate.from_messages([
            ("system", """You are a performance optimization expert implementing code improvements.
Your task is to refactor code to improve its performance while maintaining its functionality.

Guidelines:
1. Focus on language-agnostic optimizations:
   - Algorithmic improvements
   - Data structure selection
   - Resource utilization
   - Caching strategies
   - Concurrency patterns
   - Memory management

2. For each optimization:
   - Preserve the exact interface and behavior
   - Consider edge cases and error handling
   - Evaluate potential side effects
   - Ensure thread safety if applicable
   - Consider memory-performance tradeoffs

3. Safety checks to include:
   - Interface compatibility
   - Edge case handling
   - Resource cleanup
   - Error handling
   - Thread safety
   - Memory management

4. Documentation requirements:
   - Explain the optimization approach
   - Document performance implications
   - Note any new requirements or dependencies
   - Highlight potential risks
   - Describe verification steps"""),
            ("user", """Here is the code to optimize:

File: {file_path}
Lines {line_start}-{line_end}:
{code}

Performance issue:
{issue_description}

Suggested fix:
{suggested_fix}

Repository context:
{repo_context}

Implement the optimization while preserving functionality.""")
        ])
        
        # Initialize output parser
        self.output_parser = PydanticOutputParser(pydantic_object=CodeChange)
    
    async def process(self, state: AgentState, **kwargs) -> Dict[str, Any]:
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            hotspots = kwargs.get("hotspots", [])
            
            if not repo_path or not hotspots:
                raise ValueError("repo_path and hotspots are required")
            
            # Set up Docker environment
            await self.docker.setup_environment(repo_path)
            
            # Get repository context
            repo_context = await self._get_repo_context(repo_path)
            
            changes = []
            for hotspot in hotspots:
                # Read the original code
                with open(os.path.join(repo_path, hotspot["file_path"])) as f:
                    code_lines = f.readlines()
                
                original_code = "".join(
                    code_lines[hotspot["line_start"]-1:hotspot["line_end"]]
                )
                
                # Generate optimization
                change = await self._optimize_code(
                    file_path=hotspot["file_path"],
                    code=original_code,
                    line_start=hotspot["line_start"],
                    line_end=hotspot["line_end"],
                    issue_description=hotspot["description"],
                    suggested_fix=hotspot["suggested_fix"],
                    repo_context=repo_context
                )
                
                if change:
                    # Verify optimization safety
                    if not self._verify_safety(change):
                        logger.warning(f"Safety check failed for {change.file_path}")
                        continue
                    
                    changes.append(change)
                    
                    # Apply change to the file
                    new_lines = (
                        code_lines[:change.line_start-1] +
                        [change.optimized_code] +
                        code_lines[change.line_end:]
                    )
                    
                    with open(os.path.join(repo_path, change.file_path), "w") as f:
                        f.writelines(new_lines)
            
            # Update state
            state.time_used = time.time() - start_time
            state.iterations += 1
            state.improvement_pct = sum(
                c.expected_improvement for c in changes
            ) / len(changes) if changes else 0
            
            return {
                "status": "success",
                "changes": [c.dict() for c in changes]
            }
            
        except Exception as e:
            logger.error(f"Refactoring failed: {str(e)}", exc_info=True)
            return {"status": "failed", "error": str(e)}
            
        finally:
            await self.docker.cleanup()
    
    async def _get_repo_context(self, repo_path: str) -> str:
        """Get repository context for better optimization decisions"""
        try:
            # Get file structure
            structure = await self.docker.run_command(
                "find . -type f -not -path '*/\\.*' -exec file {} \\;",
                timeout=60
            )
            
            # Get dependency information if available
            deps = await self.docker.run_command(
                "find . -type f -name '*.*json' -o -name '*.xml' -o -name '*.gradle' -o -name '*.pom' -o -name '*requirements.txt' -o -name '*.gemspec' -o -name '*.cabal'",
                timeout=60
            )
            
            return f"""Repository structure:
{structure["stdout"]}

Dependencies:
{deps["stdout"]}"""
            
        except Exception as e:
            logger.error(f"Failed to get repo context: {str(e)}")
            return ""
    
    async def _optimize_code(
        self,
        file_path: str,
        code: str,
        line_start: int,
        line_end: int,
        issue_description: str,
        suggested_fix: str,
        repo_context: str
    ) -> Optional[CodeChange]:
        """Generate optimized code using LLM"""
        try:
            # Get LLM optimization
            chain = self.prompt | self.llm | self.output_parser
            result = await chain.ainvoke({
                "file_path": file_path,
                "line_start": line_start,
                "line_end": line_end,
                "code": code,
                "issue_description": issue_description,
                "suggested_fix": suggested_fix,
                "repo_context": repo_context
            })
            
            return result
            
        except Exception as e:
            logger.error(f"Optimization failed: {str(e)}", exc_info=True)
            return None
    
    def _verify_safety(self, change: CodeChange) -> bool:
        """Verify the safety of a proposed optimization"""
        safety_checks = {
            "interface_preserved": True,  # Assume true unless explicitly marked
            "edge_cases_handled": True,
            "resources_managed": True,
            "errors_handled": True,
            "thread_safe": True
        }
        
        # Update with provided safety checks
        safety_checks.update(change.safety_check)
        
        # All checks must pass
        return all(safety_checks.values())
    
    async def cleanup(self) -> None:
        await self.docker.cleanup() 