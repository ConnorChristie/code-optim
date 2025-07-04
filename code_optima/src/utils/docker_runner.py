import asyncio
import tempfile
import os
import shutil
from typing import Dict, Any, Optional, List
import logging
import json

logger = logging.getLogger(__name__)

class DockerRunner:
    def __init__(self, base_image: str = "python:3.9-slim"):
        self.base_image = base_image
        self.container_id = None
        self.temp_dir = None
    
    async def setup_environment(self, repo_path: str) -> str:
        """
        Sets up a temporary directory and copies repo contents into it.
        Returns the path to the temporary directory.
        """
        self.temp_dir = tempfile.mkdtemp(prefix="code_optima_")
        
        # Copy repository contents to temp directory
        shutil.copytree(repo_path, os.path.join(self.temp_dir, "repo"), dirs_exist_ok=True)
        
        # Create Dockerfile
        dockerfile_content = f"""
FROM {self.base_image}

WORKDIR /app
COPY repo /app

# Install common build tools
RUN apt-get update && apt-get install -y \\
    build-essential \\
    git \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# We'll install project-specific dependencies when running commands
"""
        
        with open(os.path.join(self.temp_dir, "Dockerfile"), "w") as f:
            f.write(dockerfile_content)
            
        return self.temp_dir
    
    async def build_image(self) -> str:
        """Builds Docker image and returns the image ID"""
        if not self.temp_dir:
            raise RuntimeError("Environment not set up. Call setup_environment first.")
            
        proc = await asyncio.create_subprocess_exec(
            "docker", "build", "-q", self.temp_dir,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        
        stdout, stderr = await proc.communicate()
        
        if proc.returncode != 0:
            raise RuntimeError(f"Docker build failed: {stderr.decode()}")
            
        return stdout.decode().strip()
    
    async def run_command(
        self,
        cmd: str,
        env_vars: Optional[Dict[str, str]] = None,
        timeout: Optional[int] = None
    ) -> Dict[str, Any]:
        """
        Runs a command in the Docker container.
        Returns dict with stdout, stderr, and exit code.
        """
        if not self.container_id:
            # Create container if not exists
            image_id = await self.build_image()
            
            create_args = ["docker", "create"]
            
            # Add environment variables
            if env_vars:
                for key, value in env_vars.items():
                    create_args.extend(["-e", f"{key}={value}"])
            
            create_args.append(image_id)
            
            proc = await asyncio.create_subprocess_exec(
                *create_args,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            
            stdout, stderr = await proc.communicate()
            if proc.returncode != 0:
                raise RuntimeError(f"Failed to create container: {stderr.decode()}")
                
            self.container_id = stdout.decode().strip()
            
            # Start container
            proc = await asyncio.create_subprocess_exec(
                "docker", "start", self.container_id,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            
            await proc.communicate()
        
        # Run command in container
        exec_args = [
            "docker", "exec",
            "-w", "/app",  # Set working directory
        ]
        
        if timeout:
            exec_args.extend(["--timeout", str(timeout)])
            
        exec_args.extend([self.container_id, "sh", "-c", cmd])
        
        proc = await asyncio.create_subprocess_exec(
            *exec_args,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        
        try:
            stdout, stderr = await proc.communicate()
            return {
                "stdout": stdout.decode() if stdout else "",
                "stderr": stderr.decode() if stderr else "",
                "exit_code": proc.returncode
            }
        except asyncio.TimeoutError:
            return {
                "stdout": "",
                "stderr": "Command timed out",
                "exit_code": -1
            }
    
    async def cleanup(self):
        """Cleans up Docker container and temporary directory"""
        if self.container_id:
            # Stop and remove container
            await asyncio.create_subprocess_exec(
                "docker", "stop", self.container_id
            )
            await asyncio.create_subprocess_exec(
                "docker", "rm", self.container_id
            )
            self.container_id = None
            
        if self.temp_dir and os.path.exists(self.temp_dir):
            shutil.rmtree(self.temp_dir)
            self.temp_dir = None 