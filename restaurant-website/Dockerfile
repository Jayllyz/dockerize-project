FROM composer:lts as composer

# Development
FROM php:8.3-alpine as dev
WORKDIR /var/www/html

ENV APP_ENV=dev
ENV USER=www-data

RUN apk add --no-cache \
    curl \
    icu-dev && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl

# Install Symfony CLI
SHELL ["/bin/ash", "-eo", "pipefail", "-c"]
RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.alpine.sh' | ash && \
    apk add --no-cache symfony-cli

COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY --chown=${USER}:${USER} . .

ARG PORT
ENV PORT=8000
EXPOSE ${PORT}

RUN chmod +x entrypoint.sh

USER ${USER}

ENTRYPOINT [ "./entrypoint.sh" ]

# Production
FROM php:8.3-fpm-alpine as prod
WORKDIR /var/www/html

ENV APP_ENV=prod
ENV USER=www-data

RUN apk add --no-cache icu-dev && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl  && \
    mv "${PHP_INI_DIR}/php.ini-production" "${PHP_INI_DIR}/php.ini"

COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY --chown=${USER}:${USER} . .

RUN chmod +x entrypoint.sh

HEALTHCHECK --interval=5s --timeout=3s \
    CMD ["ps", "-ef", "|", "grep php-fpm || exit 1"]

USER ${USER}

ENTRYPOINT [ "./entrypoint.sh" ]
