#!/bin/sh
set -e
diesel migration run

echo "Starting app in $APP_ENV mode"
# target dev
if [ "$APP_ENV" = "development" ]; then
    cargo run
fi

# target prod
if [ "$APP_ENV" = "production" ]; then
    exec /app/blog
fi
