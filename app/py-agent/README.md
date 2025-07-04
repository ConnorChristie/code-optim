# Code Optima Python Agent Service (LangGraph)

This service runs the LLM agent pipeline for code optimization using [LangGraph](https://langchain-ai.github.io/langgraph/).

## Setup

1. Create a `.env` file with:
   - `DATABASE_URL=postgresql://...`
   - `OPENAI_API_KEY=sk-...`
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the agent service:
   ```sh
   python main.py
   ```

## How it works
- Polls the database for queued jobs.
- Runs the LangGraph pipeline for each job (LLM agents for each stage).
- Updates job status in the database.

## Customize
- Edit `main.py` to implement each agent node using LangGraph and OpenAI.
- Add more sophisticated job/patch/metrics handling as needed. 