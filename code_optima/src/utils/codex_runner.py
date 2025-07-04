import asyncio
import tempfile
import os
import shutil
import json
from typing import Dict, Any, Optional, List, Callable
import logging
from asyncio.subprocess import Process
from dataclasses import dataclass
import uuid

logger = logging.getLogger(__name__)

@dataclass
class CodexSubmission:
    """Represents a submission to the Codex CLI in proto mode"""
    id: str
    text: str

    def to_json(self) -> str:
        """Convert to protocol format according to protocol.rs"""
        return json.dumps({
            "id": self.id,
            "op": {
                "type": "user_input",
                "items": [
                    {
                        "type": "text",
                        "text": self.text
                    }
                ]
            }
        })

class CodexRunner:
    def __init__(self, model: str = "gpt-4o-mini", config_overrides: Optional[Dict[str, Any]] = None):
        self.model = model
        self.config_overrides = config_overrides or {}
        self.temp_dir = None
        self.repo_path = None
        self.process: Optional[Process] = None
        self._event_task: Optional[asyncio.Task] = None
        self._submission_queue: asyncio.Queue[CodexSubmission] = asyncio.Queue()
        self._response_queue: asyncio.Queue[Dict[str, Any]] = asyncio.Queue()
        self._current_session_id: Optional[str] = None
        
    def _create_config_file(self, config_dir: str) -> None:
        config = {
            "model": self.model,
            "disable_response_storage": True,
            "max_tokens": 4000,
            "temperature": 0.1,
            **self.config_overrides
        }
        
        config_path = os.path.join(config_dir, "config.toml")
        with open(config_path, "w") as f:
            for key, value in config.items():
                f.write(f'{key} = "{value}"\n' if isinstance(value, str) else f'{key} = {value}\n')

    async def setup_environment(self, repo_path: str) -> str:
        self.temp_dir = tempfile.mkdtemp(prefix="codex_analysis_")
        
        self.repo_path = os.path.join(self.temp_dir, "repo")
        shutil.copytree(repo_path, self.repo_path, dirs_exist_ok=True)
        
        codex_config_dir = os.path.join(self.temp_dir, ".codex")
        os.makedirs(codex_config_dir, exist_ok=True)

        self._create_config_file(codex_config_dir)
        await self._start_codex_process(codex_config_dir)
        
        logger.info(f"Setup Codex environment in {self.temp_dir}")
        return self.temp_dir

    async def _start_codex_process(self, config_dir: str):
        if self.process:
            return

        self.process = await asyncio.create_subprocess_exec(
            "codex",
            "proto",
            cwd=self.repo_path,
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env={
                "PATH": os.getenv("PATH"),
                "OPENAI_API_KEY": os.getenv("OPENAI_API_KEY"),
            }
        )

        line = await self.process.stdout.readline() or await self.process.stderr.readline()
        logger.debug(f"Codex process started: {line}")

        self._event_task = asyncio.create_task(self._handle_events())

    async def _handle_events(self):
        assert self.process and self.process.stdout
        while True:
            try:
                line = await self.process.stdout.readline()
                if not line:
                    await asyncio.sleep(0.1)
                    continue

                line = line.decode().strip()
                event = json.loads(line)
                event_msg = event.get("msg", {})
                event_type = event_msg.get("type")

                if event_type == "session_configured":
                    self._current_session_id = event_msg.get("session_id")
                    logger.debug(f"Session configured with ID: {self._current_session_id}")
                elif event_type == "error":
                    await self._response_queue.put({
                        "success": False,
                        "output": event_msg.get('last_agent_message', 'Unknown error'),
                        "type": "error"
                    })
                elif event_type == "task_complete":
                    await self._response_queue.put({
                        "success": True,
                        "output": event_msg.get("last_agent_message", ""),
                        "type": "completion"
                    })
                else:
                    logger.debug(f"Received event: {event}")
            except Exception as e:
                logger.error(f"Error handling Codex event: {e}")

    async def _submit_prompt(self, submission: CodexSubmission):
        """Submit a prompt to Codex and wait for response"""
        if not self.process or not self.process.stdin:
            raise RuntimeError("Codex process not started")

        submission_json = submission.to_json() + "\n"
        self.process.stdin.write(submission_json.encode())
        await self.process.stdin.drain()
        
        logger.debug(f"Submitted prompt: {submission_json}")

    def _create_submission(self, prompt: str) -> CodexSubmission:
        return CodexSubmission(
            id=str(uuid.uuid4()),
            text=prompt,
        )

    def _extract_json_from_output(self, output: str) -> Dict[str, Any]:
        """Extract JSON data from Codex output that may be wrapped in markdown code blocks."""
        try:
            json_start = output.find('```json')
            if json_start >= 0:
                json_start = output.find('{', json_start)
                json_end = output.rfind('}')
                if json_end > json_start:
                    json_end += 1
            else:
                json_start = output.find('{')
                json_end = output.rfind('}') + 1
            
            if json_start >= 0 and json_end > json_start:
                json_str = output[json_start:json_end]
                json_str = json_str.replace('```', '').strip()
                return json.loads(json_str)
            
            return {}
                
        except json.JSONDecodeError as e:
            logger.warning(f"Failed to parse JSON from output: {e}")
            return {}

    async def run_analysis_and_parse_json(self, prompt: str, timeout: int = 300, stream_callback: Optional[Callable[[str], None]] = None) -> Dict[str, Any]:
        """Run Codex analysis and parse JSON from the output."""
        if not self.repo_path:
            raise RuntimeError("Environment not set up. Call setup_environment first.")

        try:
            logger.debug(f"Starting Codex analysis with prompt: {prompt[:100]}...")

            submission = self._create_submission(prompt)

            try:
                await self._submit_prompt(submission)
                result = await self._response_queue.get()
            except asyncio.TimeoutError:
                logger.warning("Codex analysis timed out")
                return self._create_error_response("Analysis timed out")

            logger.debug(f"Result: {result}")

            if not result.get("success", False):
                return self._create_error_response(result.get("error", "Unknown error"), result.get("output", ""))

            output = result.get("output", "")
            if stream_callback:
                stream_callback(f"CODEX_OUT: {output}")

            return {
                "success": True,
                "raw_output": output,
                "parsed_data": self._extract_json_from_output(output)
            }

        except Exception as e:
            logger.error(f"Codex analysis failed with exception: {str(e)}")
            return self._create_error_response(f"Analysis failed: {str(e)}")

    def _create_error_response(self, error: str, raw_output: str = "") -> Dict[str, Any]:
        return {
            "success": False,
            "error": error,
            "raw_output": raw_output,
            "parsed_data": {}
        }

    async def create_optimization_suggestions(self, hotspot_info: Dict[str, Any], stream_callback: Optional[Callable[[str], None]] = None) -> Dict[str, Any]:
        """Generate specific optimization suggestions for identified hotspots"""
        optimization_prompt = f"""
Based on the following performance hotspot analysis, provide specific code optimization suggestions:

Hotspot Information:
{json.dumps(hotspot_info, indent=2)}

For each hotspot, provide:
1. Detailed refactoring steps
2. Code examples showing before/after
3. Potential risks or considerations
4. Testing recommendations

Format your response as JSON:
{{
  "optimizations": [
    {{
      "hotspot_id": "file_path:line_start-line_end",
      "refactoring_steps": ["Step 1", "Step 2", "..."],
      "code_before": "original code snippet",
      "code_after": "optimized code snippet",
      "risks": ["Risk 1", "Risk 2"],
      "testing_recommendations": ["Test 1", "Test 2"]
    }}
  ]
}}
"""
        
        logger.debug("Starting optimization suggestions generation")
        result = await self.run_analysis_and_parse_json(optimization_prompt, stream_callback=stream_callback)
        
        if not result["success"]:
            return {
                "optimizations": [],
                "error": result.get("error", "Unknown error"),
                "success": False,
                "raw_output": result.get("raw_output", "")
            }
        
        parsed_data = result["parsed_data"]
        parsed_data["success"] = True
        parsed_data["raw_output"] = result["raw_output"]
        return parsed_data
    
    async def cleanup(self):
        """Clean up temporary files and directories"""
        if self._event_task:
            self._event_task.cancel()
            try:
                await self._event_task
            except asyncio.CancelledError:
                pass
            self._event_task = None

        if self.process:
            try:
                self.process.terminate()
                await self.process.wait()
            except Exception as e:
                logger.warning(f"Error terminating Codex process: {e}")
            self.process = None

        if self.temp_dir and os.path.exists(self.temp_dir):
            try:
                shutil.rmtree(self.temp_dir)
                logger.info(f"Cleaned up temporary directory: {self.temp_dir}")
            except Exception as e:
                logger.warning(f"Error cleaning up temporary directory: {e}")
            
            self.temp_dir = None
            self.repo_path = None 