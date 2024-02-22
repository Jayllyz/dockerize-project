# *Dockerize Everything!* - Application : Grilli

[![Build restaurant](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-restau.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-restau.yml)

## Architecture

The Grilli web application is the eponymous restaurant's website. Gourmets can view the menu, locate the restaurant
and reserve a table.

> Note: the site is static, so no forms work. This is normal.

The application is based on the [Symfony](https://symfony.com/doc/current/index.html) framework.

## Environment variables

| Variable         | Description                                 | Exemple |
|------------------|---------------------------------------------|---------|
| NGINX_HTTP_PORT  | HTTP port for the web server                | 80      |
| NGINX_HTTPS_PORT | HTTPS port for the web server               | 443     |
| PHP_DEV_PORT     | Port of the application in development mode | 8000    |

## Usage

Ensure that you have a `.env` file with the environment variables.

## Development

```bash
docker compose up
```

## Production

```bash
docker compose -f docker-compose.prod.yml up
```
