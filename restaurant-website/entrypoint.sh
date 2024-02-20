#!/bin/sh
set -e

if [ "${APP_ENV}" = "dev" ]; then
    composer install --no-interaction
    symfony server:start --no-tls
fi

if [ "${APP_ENV}" = "prod" ]; then
    composer install --no-interaction --no-dev --optimize-autoloader
    php bin/console asset-map:compile
    php bin/console cache:clear --env=prod
    php-fpm
fi
