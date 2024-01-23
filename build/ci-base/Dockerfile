FROM debian:bookworm-slim
LABEL maintainer "contact@kalisio.com"

ARG KUBECTL_VERSION=1.25.16
ARG SOPS_VERSION=3.8.1
ARG YQ_VERSION=4.40.5

# age & sops to decrypt files
# docker to build containers
RUN DEBIAN_FRONTEND=noninteractive && \
  apt-get update && \
  apt-get --no-install-recommends --yes install \
    bash \
    coreutils gettext-base \
    curl ca-certificates rclone \
    tar age git \
    docker.io && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

## Github actions don't work with nonroot container for now
## see https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions#user

# This allows Github to use our nonroot container in github actions
# see https://github.com/actions/checkout/issues/1014#issuecomment-1670098922
# RUN mkdir -m 1777 /__w

# create a user that can be used to run stuff
# RUN \
#   useradd --uid 1000 --create-home --shell /bin/bash kalisio && \
#   mkdir -p /home/kalisio/.local/bin && chown -R kalisio:kalisio /home/kalisio/.local

# USER kalisio
# WORKDIR /home/kalisio

# yq
RUN \
    cd /tmp && mkdir yq && cd yq && \
    curl -OL https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/yq_linux_amd64.tar.gz && \
    curl -OL https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/checksums && \
    curl -OL https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/checksums_hashes_order && \
    curl -OL https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/extract-checksum.sh && \
    chmod u+x extract-checksum.sh && \
    ./extract-checksum.sh "SHA-256" "yq_linux_amd64.tar.gz" | awk '{ print $2 " " $1}' | sha256sum --check && \
    tar xf yq_linux_amd64.tar.gz && \
    mv yq_linux_amd64 /usr/local/bin/yq && \
    chmod u+x /usr/local/bin/yq && \
    cd /tmp && rm -fR yq

# sops
RUN \
    cd /tmp && mkdir sops && cd sops && \
    curl -OL https://github.com/getsops/sops/releases/download/v${SOPS_VERSION}/sops-v${SOPS_VERSION}.linux.amd64 && \
    curl -OL https://github.com/getsops/sops/releases/download/v${SOPS_VERSION}/sops-v${SOPS_VERSION}.checksums.txt && \
    sha256sum --ignore-missing --quiet -c sops-v${SOPS_VERSION}.checksums.txt && \
    cp sops-v${SOPS_VERSION}.linux.amd64 /usr/local/bin/sops && \
    chmod a+x /usr/local/bin/sops && \
    cd /tmp && rm -fR sops

# kubectl
RUN \
    cd /tmp && mkdir kubectl && cd kubectl && \
    curl -OL https://dl.k8s.io/release/v${KUBECTL_VERSION}/bin/linux/amd64/kubectl && \
    curl -OL https://dl.k8s.io/release/v${KUBECTL_VERSION}/bin/linux/amd64/kubectl.sha256 && \
    echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check && \
    cp kubectl /usr/local/bin/kubectl && \
    chmod a+x /usr/local/bin/kubectl && \
    cd /tmp && rm -fR kubectl
