# Effect-TS Node.js Backend

A Node.js backend application built with Effect-TS.

## Prerequisites

- Node.js >= 18.0.0
- npm or pnpm

## Quick Start

Clone and install dependencies:
```bash
git clone <repository-url>
cd nodejs-app
npm install
```

## Development

Run the development server with hot reload:
```bash
npm run dev
```

## Build and Run

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Additional Commands

Type checking:
```bash
npm run typecheck
```

Clean build artifacts:
```bash
npm run clean
```

## Project Structure

```
nodejs-app/
├── src/
│   ├── main.ts      # Application entry point
│   └── server/      # Server configuration
├── dist/            # Compiled output
├── vite.config.js   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

The application runs on port 8000 by default.
