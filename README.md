Here's the updated README section for Docker usage:

# Effect-TS Node.js Backend

A Node.js backend application built with Effect-TS.

## Prerequisites

- Node.js >= 22.0.0
- pnpm
- Docker

## Local Development

Install dependencies:
```bash
pnpm install
```

Run development server:
```bash
pnpm dev
```

## Docker

### Build Image

```bash
docker build \
  --platform linux/amd64 \
  --tag effect-ts-backend:1.0.0 \
  --tag effect-ts-backend:latest \
  --build-arg NODE_ENV=production \
  .
```

### Run Container

Development:
```bash
docker run \
  --name effect-backend \
  -p 8000:8000 \
  -e NODE_ENV=development \
  effect-ts-backend:latest
```

Production:
```bash
docker run \
  --name effect-backend \
  -p 8000:8000 \
  -e NODE_ENV=production \
  --restart unless-stopped \
  -d \
  effect-ts-backend:latest
```

### Docker Commands

Check container logs:
```bash
docker logs effect-backend
```

Stop container:
```bash
docker stop effect-backend
```

Remove container:
```bash
docker rm effect-backend
```

## Project Structure

```
nodejs-app/
├── src/
│   ├── main.ts      # Application entry point
│   └── server/      # Server configuration
├── dist/            # Compiled output
├── Dockerfile       # Docker configuration
├── .dockerignore    # Docker ignore file
├── vite.config.js   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

The application runs on port 8000 by default.

## Health Check

The Docker container includes a health check endpoint at:
```
http://localhost:8000/health
```
