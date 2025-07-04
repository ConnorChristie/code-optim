#!/bin/bash

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Docker
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add current user to docker group
sudo usermod -aG docker $USER

# Create app directory
mkdir -p ~/code-optima
cd ~/code-optima

# Create docker-compose file
cat > docker-compose.yml << 'EOL'
version: '3'
services:
  nextjs:
    build:
      context: ./app
      dockerfile: Dockerfile
    ports:
      - "80:8080"
    restart: always
    environment:
      - NODE_ENV=production
EOL

echo "Setup complete! Log out and log back in for docker permissions to take effect."
echo "Then run these commands to deploy your app:"
echo "cd ~/code-optima"
echo "git clone <your-repo-url> ."
echo "docker compose up --build -d" 