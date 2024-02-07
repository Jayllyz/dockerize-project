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
