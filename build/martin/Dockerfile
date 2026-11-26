# Martin with the DuckDB/GeoParquet backend.
# The backend is "unstable" upstream, so the official image does not ship it.

FROM rust:1-bookworm AS builder
ARG MARTIN_VERSION=2.0.0-beta.7
# Node is needed: martin's build.rs runs "npm install" for its web UI.
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential cmake clang pkg-config libssl-dev ca-certificates curl gnupg \
 && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
 && apt-get install -y --no-install-recommends nodejs \
 && rm -rf /var/lib/apt/lists/*
RUN cargo install martin --locked --version ${MARTIN_VERSION} \
      --features unstable-duckdb --root /out

# Bundle the DuckDB extensions so nothing is downloaded at runtime.
# Version must match the DuckDB linked into martin.
FROM debian:bookworm-slim AS extensions
ARG DUCKDB_VERSION=v2.0.0
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /ext/${DUCKDB_VERSION}/linux_amd64
RUN for e in spatial httpfs; do \
      curl -fsSL "https://extensions.duckdb.org/${DUCKDB_VERSION}/linux_amd64/${e}.duckdb_extension.gz" \
        | gunzip > "${e}.duckdb_extension" || exit 1; \
    done

FROM debian:bookworm-slim
# libfreetype6 is required by martin even without fonts.
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates libssl3 libfreetype6 \
 && rm -rf /var/lib/apt/lists/*
COPY --from=builder /out/bin/martin /usr/local/bin/martin
# Fail the build if a shared library is missing.
RUN ! ldd /usr/local/bin/martin | grep -q 'not found'

# DuckDB looks for extensions in $HOME/.duckdb/extensions.
RUN mkdir -p /home/martin/.duckdb && chown -R 1000:1000 /home/martin
COPY --from=extensions --chown=1000:1000 /ext /home/martin/.duckdb/extensions
ENV HOME=/home/martin
USER 1000:1000

EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/martin"]
