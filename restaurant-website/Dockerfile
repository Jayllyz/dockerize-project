FROM composer:lts as composer

# Development
FROM php:8.3-alpine as dev
WORKDIR /var/www/html

ENV APP_ENV=dev
ENV USER=www-data

RUN apk add --no-cache \
    curl \
    bash \
    icu-dev && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl

# Install Symfony CLI
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.alpine.sh' | bash && \
    apk add --no-cache symfony-cli

COPY --from=composer /usr/bin/composer /usr/bin/composer 

COPY --chown=${USER}:${USER} composer.json composer.lock ./

USER ${USER}

RUN composer install --no-scripts

COPY --chown=${USER}:${USER} . .

ARG PORT
ENV PORT=8000
EXPOSE ${PORT}

RUN chmod +x entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
