FROM rustlang/rust:nightly-slim as builder
WORKDIR /app

ENV USER_ID=65535
ENV GROUP_ID=65535
ENV USER_NAME=blog
ENV GROUP_NAME=blog

RUN groupadd -g $GROUP_ID $GROUP_NAME && \
    useradd -l -u $USER_ID -g $GROUP_NAME -m $USER_NAME && \
    apt-get update && \
    apt-get install -y --no-install-recommends libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh .

RUN cargo install diesel_cli --no-default-features --features postgres && \
    chmod +x entrypoint.sh

COPY . .

FROM builder as dev
ENV APP_ENV=development

RUN chown -R "${USER_NAME}":"${GROUP_NAME}" /app /usr/local/cargo

USER $USER_NAME
ENTRYPOINT [ "/app/entrypoint.sh" ]

FROM builder as prod
ENV APP_ENV=production

RUN cargo install --path . && \
    cp /usr/local/cargo/bin/blog . && \
    chown -R "${USER_NAME}":"${GROUP_NAME}" /app

USER $USER_NAME
ENTRYPOINT [ "/app/entrypoint.sh" ]
