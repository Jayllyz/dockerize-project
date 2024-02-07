# Base server
FROM node:lts-alpine3.19 as base
WORKDIR /app

COPY --chown=node:node . .

ENV PORT $PORT
EXPOSE $PORT

# Development
FROM base as dev
ENV NODE_ENV=development
RUN npm install && \
    chown -R node:node /app
USER node
CMD [ "npm", "run", "start:dev" ]

# Build
FROM base as build
RUN npm ci && \
    npm cache clean --force
RUN npm run build && \
    chown -R node:node /app

# Pre-production
FROM build as pre-prod
ENV NODE_ENV=production
USER node
CMD ["npm", "run", "start:prod"]

# Production
FROM build as prod
ENV NODE_ENV=production
USER node
CMD ["node", "dist/main.js"]
