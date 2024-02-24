# *Dockerize Everything!* - Application : Make Me Watch

[![Build catalog](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-catalog.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-catalog.yml)

## Architecture

The Make Me Watch web application displays a catalog of the 250 best TV series
(according to [the TV Maze ranking](https://tvmaze.com)). It is possible to display the details
of a TV series by clicking on its poster.

The application consists of :

- a single-page application ("client") based on the
  frontend framework [SvelteKit](https://kit.svelte.dev/docs/introduction).
- an API ("server") based on the backend framework [NestJS](https://docs.nestjs.com).

## Environment variables

| Variable           | Description                                    | Exemple                 |
|--------------------|------------------------------------------------|-------------------------|
| API_BASE_URL       | URL of the API                                 | <http://localhost:3000> |
| FRONT_DEV_PORT     | Port of the application in development mode    | 5173                    |
| FRONT_PREPROD_PORT | Port of the application in pre-production mode | 5173                    |
| FRONT_PROD_PORT    | Port of the application in production mode     | 5173                    |
| BACK_PORT          | Port of the backend application                | 3000                    |
| CADDY_HTTP_PORT    | HTTP port for the web server                   | 80                      |
| CADDY_HTTPS_PORT   | HTTPS port for the web server                  | 443                     |

## Usage

Ensure that you have a `.env` file with the environment variables.

```bash
cp .env.example .env
```

## Development

```bash
docker compose up
```

## Pre-production

Edit the target of the services in the `docker-compose.prod.yml` file to `pre-prod` and then run:

```bash
docker compose -f docker-compose.prod.yml up
```

## Production

```bash
docker compose -f docker-compose.prod.yml up
```
