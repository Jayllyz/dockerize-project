# Base client
FROM node:lts-alpine3.19 as base
WORKDIR /app

COPY --chown=node:node package*.json .

ENV PORT $PORT
EXPOSE $PORT

# Development
FROM base as dev
ENV NODE_ENV=development
RUN npm install && \
    chown -R node:node /app
COPY --chown=node:node . .
USER node
CMD ["npm", "run", "dev"]

# Build
FROM base as build
RUN npm ci && \
    npm cache clean --force
COPY --chown=node:node . .
RUN npm run build && \
    chown -R node:node /app

# Pre-production
FROM build as pre-prod
ENV NODE_ENV=production
USER node
CMD ["npm", "run", "preview"]

# Production
FROM base as prod
ENV NODE_ENV=production
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
USER node
CMD ["node", "build/index.js"]
