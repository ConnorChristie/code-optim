from typing import Dict, Any, List, Optional, Callable
import time
import logging
from datetime import datetime
import json

from .base import BaseAgent, AgentState
from ..utils.codex_runner import CodexRunner
from ..core.config import get_settings

logger = logging.getLogger(__name__)

class CodexAnalyzerAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="codex_analyzer",
            timeout_s=300,  # 5 minutes - Codex is typically faster than Docker + LLM
            cost_limit=0.05  # Lower cost limit since Codex is more efficient
        )
        
        self.settings = get_settings()
        
        # Initialize Codex runner with optimal settings for analysis
        config_overrides = {
            "temperature": 0.1,  # Low temperature for consistent analysis
            "max_tokens": 4000,  # Enough for detailed analysis
            "disable_response_storage": True,  # Privacy
        }
        
        self.codex = CodexRunner(
            model=getattr(self.settings, 'CODEX_MODEL', 'gpt-4o-mini'),
            config_overrides=config_overrides
        )
        
    async def process(self, state: AgentState, **kwargs) -> Dict[str, Any]:
        """Process repository analysis using Codex CLI"""
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            if not repo_path:
                raise ValueError("repo_path is required")

            max_hotspots = kwargs.get("max_hotspots", 10)

            logger.info(f"Setting up Codex environment for {repo_path}")
            await self.codex.setup_environment(repo_path)
            time.sleep(1)

            logger.info("Running performance hotspot analysis with Codex")

            def stream_callback(message: str):
                logger.info(f"Codex: {message}")
            
            analysis_result = await self._analyze_performance_hotspots(max_hotspots, stream_callback)
            
            if not analysis_result["success"]:
                raise Exception(f"Codex analysis failed: {analysis_result.get('error', 'Unknown error')}")
            
            hotspots = analysis_result.get("hotspots", [])
            
            formatted_hotspots = []
            for hotspot in hotspots:
                formatted_hotspot = {
                    "file_path": hotspot.get("file_path", ""),
                    "line_start": hotspot.get("line_start", 0),
                    "line_end": hotspot.get("line_end", 0),
                    "severity": hotspot.get("severity", 0.0),
                    "description": hotspot.get("description", ""),
                    "suggested_fix": hotspot.get("suggested_fix", ""),
                    "estimated_improvement": hotspot.get("estimated_improvement", 0.0),
                    "code_context": hotspot.get("code_context", "")
                }
                formatted_hotspots.append(formatted_hotspot)
            
            # Update state
            state.iterations += 1
            state.time_used = time.time() - start_time
            state.cost_used += self._estimate_cost(analysis_result)
            
            # Generate optimization suggestions if hotspots were found
            optimizations = []
            if formatted_hotspots:
                logger.info("Generating optimization suggestions")
                opt_result = await self.codex.create_optimization_suggestions({
                    "hotspots": formatted_hotspots
                }, stream_callback)
                
                if opt_result["success"]:
                    optimizations = opt_result.get("optimizations", [])
                    state.cost_used += self._estimate_cost(opt_result)
            
            logger.info(f"Analysis completed. Found {len(formatted_hotspots)} hotspots")
            
            return {
                "status": "success",
                "hotspots": formatted_hotspots,
                "optimizations": optimizations,
                "summary": analysis_result.get("summary", f"Analyzed codebase and found {len(formatted_hotspots)} performance hotspots"),
                "total_files_analyzed": analysis_result.get("total_files_analyzed", 0),
                "analysis_time": datetime.now().isoformat(),
                "codex_model": self.codex.model,
                "raw_analysis": analysis_result.get("raw_output", "")
            }
            
        except Exception as e:
            logger.error(f"Codex analysis failed: {str(e)}")
            state.time_used = time.time() - start_time
            
            return {
                "status": "failed",
                "error": str(e),
                "hotspots": [],
                "optimizations": []
            }
        
        finally:
            # Always cleanup
            await self.cleanup()
    
    async def _analyze_performance_hotspots(self, max_hotspots: int = 10, stream_callback: Optional[Callable[[str], None]] = None) -> Dict[str, Any]:
        """Analyze codebase for performance hotspots"""
        analysis_prompt = f"""
Analyze this codebase for performance bottlenecks and inefficiencies. 

Focus on identifying:
1. Algorithmic inefficiencies (O(n²) when O(n) is possible)
2. Resource-intensive operations (nested loops, redundant computations)
3. Memory management issues
4. Unnecessary computations
5. I/O bottlenecks
6. Data structure misuse

For each hotspot you find, provide:
- File path and line numbers
- Severity score (0-1, where 1 is most severe)
- Description of the issue
- Suggested fix
- Estimated performance improvement percentage

Please examine the code files and provide your analysis as a JSON response in this format:
{{
  "hotspots": [
    {{
      "file_path": "path/to/file.py",
      "line_start": 10,
      "line_end": 20,
      "severity": 0.8,
      "description": "Inefficient nested loop causing O(n²) complexity",
      "suggested_fix": "Use a hash set for O(1) lookups instead of nested iteration",
      "estimated_improvement": 75.0,
      "code_context": "The actual problematic code snippet"
    }}
  ],
  "summary": "Overall analysis summary",
  "total_files_analyzed": 5,
  "analysis_time": "2024-01-15T10:30:00Z"
}}

Limit your analysis to the top {max_hotspots} most critical performance issues.
"""
        
        logger.debug("Starting performance hotspot analysis")
        result = await self.codex.run_analysis_and_parse_json(analysis_prompt, stream_callback=stream_callback)
        
        if not result["success"]:
            return {
                "hotspots": [],
                "error": result.get("error", "Unknown error"),
                "success": False,
                "raw_output": result.get("raw_output", "")
            }
        
        parsed_data = result["parsed_data"]
        parsed_data["success"] = True
        parsed_data["raw_output"] = result["raw_output"]
        return parsed_data
    
    def _estimate_cost(self, result: Dict[str, Any]) -> float:
        """Estimate the cost of a Codex operation"""
        # This is a rough estimate - actual costs depend on token usage
        # Codex CLI doesn't provide direct token counts, so we estimate based on output length
        
        output_length = len(result.get("raw_output", ""))
        
        # Rough estimate: $0.001 per 1000 characters (very conservative)
        estimated_cost = (output_length / 1000) * 0.001
        
        return min(estimated_cost, 0.01)  # Cap at 1 cent per operation
    
    async def analyze_specific_files(self, state: AgentState, file_paths: List[str], **kwargs) -> Dict[str, Any]:
        """Analyze specific files for performance issues"""
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            if not repo_path:
                raise ValueError("repo_path is required")
            
            await self.codex.setup_environment(repo_path)
            
            # Create focused analysis prompt for specific files
            files_str = ", ".join(file_paths)
            focused_prompt = f"""
Analyze these specific files for performance bottlenecks: {files_str}

Focus on:
1. Algorithmic inefficiencies
2. Resource-intensive operations
3. Memory management issues
4. Unnecessary computations

Provide analysis in JSON format with hotspots for each file.
"""
            
            def stream_callback(message: str):
                logger.info(f"Codex: {message}")
            
            result = await self.codex.run_analysis_and_parse_json(focused_prompt, stream_callback=stream_callback)
            
            if not result["success"]:
                raise Exception(f"Focused analysis failed: {result.get('error', 'Unknown error')}")
            
            hotspots = result["parsed_data"].get("hotspots", [])
            
            state.iterations += 1
            state.time_used = time.time() - start_time
            state.cost_used += self._estimate_cost(result)
            
            return {
                "status": "success",
                "hotspots": hotspots,
                "analyzed_files": file_paths,
                "raw_output": result["raw_output"]
            }
            
        except Exception as e:
            logger.error(f"Focused file analysis failed: {str(e)}")
            state.time_used = time.time() - start_time
            
            return {
                "status": "failed",
                "error": str(e),
                "hotspots": []
            }
        
        finally:
            await self.cleanup()
    
    async def generate_performance_report(self, state: AgentState, hotspots: List[Dict[str, Any]], **kwargs) -> Dict[str, Any]:
        """Generate a comprehensive performance report"""
        start_time = time.time()
        
        try:
            repo_path = kwargs.get("repo_path")
            if not repo_path:
                raise ValueError("repo_path is required")
            
            await self.codex.setup_environment(repo_path)
            
            # Create report generation prompt
            report_prompt = f"""
Based on the following performance hotspots, generate a comprehensive performance optimization report:

Hotspots:
{json.dumps(hotspots, indent=2)}

Include:
1. Executive summary
2. Priority ranking of issues
3. Estimated impact of fixes
4. Implementation timeline
5. Risk assessment
6. Testing strategy

Format as a structured report in JSON format.
"""
            
            def stream_callback(message: str):
                logger.info(f"Codex: {message}")
            
            result = await self.codex.run_analysis_and_parse_json(report_prompt, stream_callback=stream_callback)
            
            if not result["success"]:
                raise Exception(f"Report generation failed: {result.get('error', 'Unknown error')}")
            
            state.iterations += 1
            state.time_used = time.time() - start_time
            state.cost_used += self._estimate_cost(result)
            
            return {
                "status": "success",
                "report": result["parsed_data"],
                "raw_output": result["raw_output"],
                "hotspots_analyzed": len(hotspots),
                "generation_time": datetime.now().isoformat()
            }
            
        except Exception as e:
            logger.error(f"Report generation failed: {str(e)}")
            state.time_used = time.time() - start_time
            
            return {
                "status": "failed",
                "error": str(e),
                "report": {}
            }
        
        finally:
            await self.cleanup()
    
    async def cleanup(self) -> None:
        """Clean up Codex resources"""
        if self.codex:
            await self.codex.cleanup()
        logger.info("Codex analyzer cleanup completed") 