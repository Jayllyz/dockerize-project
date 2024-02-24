FROM caddy:2.7-alpine

RUN apk add --no-cache nss-tools && \
    mkdir -p /etc/caddy /srv /data/caddy /config/caddy && \
    adduser --disabled-password --gecos "" --no-create-home caddy && \
    chown -R caddy:caddy /etc/caddy /srv /data /config

COPY ./Caddyfile /etc/caddy/Caddyfile

HEALTHCHECK --interval=1m --timeout=3s \
    CMD wget --no-check-certificate --no-verbose --tries=1 --spider http://localhost/health || exit 1

USER caddy
