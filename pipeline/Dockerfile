FROM node:18-slim

# Install git and other dependencies
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install native version of Codex CLI
RUN npm install -g @openai/codex@native

WORKDIR /app

# Copy pipeline directory
COPY . .

# Install dependencies using pnpm
RUN npm install -g pnpm ts-node && \
    pnpm install

# Build TypeScript code
RUN pnpm run build

# Set environment variable to use native version
ENV CODEX_RUST=1

# Start workers
CMD ["ts-node", "src/index.ts"]
