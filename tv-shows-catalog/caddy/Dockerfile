FROM caddy:2.7-alpine

# hadolint ignore=DL3018
RUN apk add --no-cache nss-tools && \
    mkdir -p /etc/caddy /srv /data/caddy /config/caddy && \
    addgroup -S caddy && adduser -D -S --no-create-home -G caddy caddy && \
    chown -R caddy:caddy /etc/caddy /srv /data /config

COPY ./Caddyfile /etc/caddy/Caddyfile

HEALTHCHECK --interval=1m --timeout=3s \
    CMD wget --no-check-certificate --no-verbose --tries=1 --spider http://localhost/health || exit 1

USER caddy
