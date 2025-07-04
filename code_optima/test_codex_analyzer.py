#!/usr/bin/env python3

import asyncio
import tempfile
import os
import sys
import logging
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from src.agents.codex_analyzer import CodexAnalyzerAgent
from src.agents.base import AgentState

import logging
logging.basicConfig(level=logging.DEBUG)


async def create_test_repo():
    """Create a test repository with performance issues"""
    temp_dir = tempfile.mkdtemp(prefix="codex_analyzer_test_")
    
    # Create Python file with performance issues
    inefficient_code = '''
def find_duplicates(items):
    """O(n²) algorithm - inefficient"""
    duplicates = []
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[i] == items[j] and items[i] not in duplicates:
                duplicates.append(items[i])
    return duplicates

def bubble_sort(arr):
    """O(n²) sorting algorithm - inefficient"""
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def inefficient_search(data, target):
    """Redundant search operations"""
    found_indices = []
    for i in range(len(data)):
        if data[i] == target:
            found_indices.append(i)
    # Redundant second loop
    for i in range(len(data)):
        if data[i] == target:
            found_indices.append(i)
    return found_indices

def memory_waster(n):
    """Memory-intensive operations"""
    result = []
    for i in range(n):
        temp_list = []
        for j in range(1000):
            temp_list.append(j * i)
        result.extend(temp_list)
    return result

def string_concatenation_inefficient(items):
    """Inefficient string concatenation"""
    result = ""
    for item in items:
        result += str(item) + ", "
    return result

def good_function(items):
    """This function is already optimized"""
    return list(set(items))
'''
    
    with open(os.path.join(temp_dir, "inefficient.py"), "w") as f:
        f.write(inefficient_code)
    
    # Create JavaScript file with performance issues
    js_code = '''
function inefficientLoop(arr) {
    // O(n²) complexity
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

function memoryIntensive(data) {
    // Creates unnecessary large arrays
    let largeArray = [];
    for (let i = 0; i < 100000; i++) {
        largeArray.push(data.repeat(i));
    }
    return largeArray;
}

function domManipulationHeavy() {
    // Inefficient DOM manipulation
    for (let i = 0; i < 1000; i++) {
        document.getElementById('container').innerHTML += '<div>Item ' + i + '</div>';
    }
}
'''
    
    with open(os.path.join(temp_dir, "inefficient.js"), "w") as f:
        f.write(js_code)
    
    # Create a simple package.json
    package_json = '''
{
  "name": "test-performance-issues",
  "version": "1.0.0",
  "description": "Test repository with performance issues",
  "main": "inefficient.js",
  "scripts": {
    "test": "echo 'No tests specified'"
  }
}
'''
    
    with open(os.path.join(temp_dir, "package.json"), "w") as f:
        f.write(package_json)
    
    # Create a README
    readme = '''
# Test Repository with Performance Issues

This repository contains intentionally inefficient code for testing the Codex analyzer.

## Files:
- inefficient.py: Python code with various performance issues
- inefficient.js: JavaScript code with performance problems
- package.json: Basic Node.js package configuration
'''
    
    with open(os.path.join(temp_dir, "README.md"), "w") as f:
        f.write(readme)
    
    return temp_dir


async def test_codex_analyzer():
    """Test the Codex analyzer with a sample repository"""
    print("Codex Analyzer Test")
    print("=" * 50)
    
    # Create test repository
    print("Creating test repository...")
    repo_path = await create_test_repo()
    print(f"Test repository created at: {repo_path}")
    
    try:
        # Initialize the analyzer
        print("\nInitializing Codex analyzer...")
        analyzer = CodexAnalyzerAgent()
        state = AgentState(job_id="codex_test")
        
        # Run the analysis
        print("Running Codex analysis...")
        print("This may take a few minutes as Codex analyzes the codebase...")
        
        result = await analyzer.process(state, repo_path=repo_path)
        
        # Display results
        print(f"\nAnalysis completed!")
        print(f"Status: {result['status']}")
        
        if result['status'] == 'success':
            hotspots = result['hotspots']
            optimizations = result['optimizations']
            
            print(f"\nFound {len(hotspots)} performance hotspots:")
            for i, hotspot in enumerate(hotspots, 1):
                print(f"\n{i}. {hotspot['file_path']} (lines {hotspot['line_start']}-{hotspot['line_end']})")
                print(f"   Severity: {hotspot['severity']:.2f}")
                print(f"   Description: {hotspot['description']}")
                print(f"   Suggested fix: {hotspot['suggested_fix']}")
                print(f"   Estimated improvement: {hotspot['estimated_improvement']:.1f}%")
                if hotspot['code_context']:
                    print(f"   Code context: {hotspot['code_context'][:100]}...")
            
            if optimizations:
                print(f"\nGenerated {len(optimizations)} optimization suggestions:")
                for i, opt in enumerate(optimizations, 1):
                    print(f"\n{i}. {opt.get('hotspot_id', 'Unknown')}")
                    print(f"   Steps: {len(opt.get('refactoring_steps', []))} refactoring steps")
                    if opt.get('risks'):
                        print(f"   Risks: {', '.join(opt['risks'])}")
            
            print(f"\nAnalysis Summary:")
            print(f"  Model used: {result['codex_model']}")
            print(f"  Total files analyzed: {result['total_files_analyzed']}")
            print(f"  Analysis time: {result['analysis_time']}")
            print(f"  Summary: {result['summary']}")
            
        else:
            print(f"Analysis failed: {result.get('error', 'Unknown error')}")
            if result.get('raw_analysis'):
                print(f"Raw output: {result['raw_analysis'][:500]}...")
        
        # Display agent state
        print(f"\nAgent Performance:")
        print(f"  Time used: {state.time_used:.2f} seconds")
        print(f"  Cost used: ${state.cost_used:.4f}")
        print(f"  Iterations: {state.iterations}")
        
    except Exception as e:
        print(f"Error during analysis: {str(e)}")
        import traceback
        traceback.print_exc()
    
    finally:
        print(f"\nCleaning up test repository...")
        import shutil
        shutil.rmtree(repo_path)
        print("Cleanup complete.")


async def test_specific_file_analysis():
    """Test analyzing specific files"""
    print("\nTesting specific file analysis...")
    
    repo_path = await create_test_repo()
    
    try:
        analyzer = CodexAnalyzerAgent()
        state = AgentState(job_id="specific_file_test")
        
        # Test analyzing just the Python file
        result = await analyzer.analyze_specific_files(
            state, 
            ["inefficient.py"], 
            repo_path=repo_path
        )
        
        print(f"Specific file analysis status: {result['status']}")
        if result['status'] == 'success':
            print(f"Found {len(result['hotspots'])} hotspots in specified files")
            print(f"Analyzed files: {result['analyzed_files']}")
        
    except Exception as e:
        print(f"Error in specific file analysis: {str(e)}")
    
    finally:
        import shutil
        shutil.rmtree(repo_path)


def main():
    """Main test function"""
    print("Codex Analyzer Test Suite")
    print("=" * 50)
    
    # Check if we have the required environment
    if not os.environ.get('OPENAI_API_KEY'):
        print("ERROR: OPENAI_API_KEY environment variable is not set")
        print("Please set your OpenAI API key before running this test")
        return
    
    print("Note: This test will use the OpenAI API and may incur costs")
    print("The test uses gpt-4o-mini which is cost-effective")
    
    confirm = input("\nDo you want to continue? (y/N): ")
    if confirm.lower() != 'y':
        print("Test cancelled.")
        return
    
    # Run the tests
    asyncio.run(test_codex_analyzer())
    asyncio.run(test_specific_file_analysis())


if __name__ == "__main__":
    main() 