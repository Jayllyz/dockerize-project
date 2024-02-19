#!/bin/sh
set -e

if [ "${APP_ENV}" = "dev" ]; then
    chown -R "${USER}":"${USER}" /var/www/html
    symfony server:start --no-tls
fi