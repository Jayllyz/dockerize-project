# Base client
FROM node:lts-alpine3.19 as base
WORKDIR /app

COPY --chown=node:node . .

ARG API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL

ENV PORT $PORT
EXPOSE $PORT

# Development
FROM base as dev
ENV NODE_ENV=Development
RUN npm install && \
    chown -R node:node /app
USER node
CMD ["npm", "run", "dev"]
