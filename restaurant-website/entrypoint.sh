#!/bin/sh
set -e

if [ "${APP_ENV}" = "dev" ]; then
    chown -R "${USER}":"${USER}" /var/www/html
    symfony server:start --no-tls
fi

if [ "${APP_ENV}" = "prod" ]; then
    php bin/console asset-map:compile
    php bin/console cache:clear --env=prod
    php-fpm
fi