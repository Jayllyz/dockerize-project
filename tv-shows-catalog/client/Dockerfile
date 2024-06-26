# Base client
FROM node:22-alpine as base

# hadolint ignore=DL3018
RUN apk add --no-cache gcompat

USER node
WORKDIR /app

COPY --chown=node:node package*.json .

ENV PORT $PORT
EXPOSE $PORT

HEALTHCHECK --interval=5s --timeout=1s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT} || exit 1

# Development
FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY --chown=node:node . .
CMD ["npm", "run", "dev"]

# Build
FROM base as build
RUN npm ci && \
    npm cache clean --force
COPY --chown=node:node . .
RUN npm run build && \
    npm prune --production

# Pre-production
FROM build as pre-prod
ENV NODE_ENV=production
CMD ["npm", "run", "preview"]

# Production
FROM base as prod
ENV NODE_ENV=production
COPY --from=build --chown=node:node /app/build /app/build
CMD ["node", "build/index.js"]
