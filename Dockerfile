# Build stage
FROM node:22-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Add non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /build

# Copy package files
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source files and build
COPY --chown=appuser:appgroup . .
RUN pnpm build && \
    pnpm prune --prod

# Production stage
FROM node:22-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Add non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy production dependencies and built files
COPY --from=builder --chown=appuser:appgroup /build/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /build/dist ./dist
COPY --chown=appuser:appgroup package.json pnpm-lock.yaml ./

# Configure environment
ENV NODE_ENV=production \
    PORT=8000 \
    USER=appuser

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8000/health || exit 1

# Start application
CMD ["node", "dist/server.js"]

