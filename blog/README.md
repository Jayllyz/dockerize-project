# *Dockerize Everything!* - Application : The Computer Club's Blog

[![Build blog](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-blog.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-blog.yml)

## Architecture

The Computer Club's Blog is the blog of an association of passionate developers. Readers can
can list articles published by the association, and read an article.

The application is based on the [Rocket](https://rocket.rs/) framework.

## Environment variables

| Variable          | Description              | Exemple                                     |
|-------------------|--------------------------|---------------------------------------------|
| POSTGRES_USER     | User of the database     | usersame                                    |
| POSTGRES_PASSWORD | Password of the database | super_secret                                |
| POSTGRES_DB       | Name of the database     | blog                                        |
| DATABASE_URL      | URL of the database      | postgres://user:super_secret@localhost/blog |
| BLOG_PORT         | Port of the application  | 8000                                        |
| DB_PORT           | Port of the database     | 5432                                        |

## Usage

Ensure that you have a `.env` file with the environment variables.

```bash
cp .env.example .env
```

### Development

```bash
docker compose up
```

### Production

```bash
docker compose -f docker-compose.prod.yml up
```
