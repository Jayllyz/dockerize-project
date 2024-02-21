# Base image
FROM rustlang/rust:nightly-slim as base
WORKDIR /app

ENV USER_ID=2000
ENV GROUP_ID=2001
ENV USER_NAME=blog
ENV GROUP_NAME=blog

RUN groupadd -g ${GROUP_ID} ${GROUP_NAME} && \
    useradd -l -u ${USER_ID} -g ${GROUP_NAME} -m ${USER_NAME} && \
    apt-get update && \
    apt-get install -y --no-install-recommends libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh .
RUN cargo install diesel_cli --no-default-features --features postgres && \
    chmod +x entrypoint.sh

# Development
FROM base as dev
ENV APP_ENV=development

COPY . .
RUN chown -R "${USER_NAME}":"${GROUP_NAME}" /app /usr/local/cargo

USER ${USER_NAME}
ENTRYPOINT [ "/app/entrypoint.sh" ]

# Builder
FROM base as builder
COPY . .
RUN cargo install --path .

# Production
FROM base as prod
ENV APP_ENV=production

COPY --from=builder /usr/local/cargo/bin/blog /app/blog
RUN chown -R "${USER_NAME}":"${GROUP_NAME}" /app

USER ${USER_NAME}
ENTRYPOINT [ "/app/entrypoint.sh" ]
