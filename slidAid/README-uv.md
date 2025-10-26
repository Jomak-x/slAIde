Quick start (uv)

Prereqs

- Install uv: curl -LsSf https://astral.sh/uv/install.sh | sh
- Python 3.12+ (recommended 3.13 for a2a)

Setup

- cd slidAid/slAIde
- cp .env.example .env and set GOOGLE_API_KEY

Run each agent in separate terminals

1. Presentation agent
   cd slidAid/slAIde/presentation_agent
   uv venv && source .venv/bin/activate
   uv run --active .

2. Summary agent
   cd slidAid/slAIde/summaryagent
   uv venv && source .venv/bin/activate
   uv run --active .

3. Host agent (A2A endpoint)
   cd slidAid/slAIde/hostagent
   uv venv && source .venv/bin/activate
   uv run --active .

Optional ADK web for single agent debugging

- In either presentation_agent or summaryagent folders you can also run:
  uv run --active adk web
  This uses the exported root_agent for the ADK web UI.

Test via JSON-RPC

- curl -X POST http://localhost:8000/ \
  -H 'Content-Type: application/json' \
  -d '{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "message/send",
  "params": {"message": {"role":"user","messageId":"1","contextId":"ctx-1","parts":[{"type":"text","text":"Create a presentation about Mars"}]}}
  }'
