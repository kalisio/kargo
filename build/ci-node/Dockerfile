FROM harbor.portal.kalisio.com/kalisio/ci-base:latest
LABEL maintainer "contact@kalisio.com"

ARG NODE_VERSION=16.19.1

# NOTE: active user is still root
# ci-base defines users (gha-user) but the active user remains root

# node
RUN \
    mkdir -p /tmp/node && cd /tmp/node && \
    curl -OL https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz && \
    curl -OL https://nodejs.org/dist/v${NODE_VERSION}/SHASUMS256.txt && \
    sha256sum --ignore-missing --quiet -c SHASUMS256.txt && \
    tar xf node-v${NODE_VERSION}-linux-x64.tar.xz && \
    cp -fR node-v${NODE_VERSION}-linux-x64/bin /usr/local && \
    cp -fR node-v${NODE_VERSION}-linux-x64/lib /usr/local && \
    cp -fR node-v${NODE_VERSION}-linux-x64/share /usr/local && \
    npm install --global yarn && \
    cd /tmp && rm -fR node

