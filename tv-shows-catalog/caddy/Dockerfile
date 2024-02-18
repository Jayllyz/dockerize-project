FROM caddy:2.7-alpine
COPY ./Caddyfile /etc/caddy/Caddyfile
HEALTHCHECK --interval=30s --timeout=30s CMD ["nc", "-z", "127.0.0.1", "80"]
