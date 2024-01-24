FROM debian:bookworm-slim
LABEL maintainer "contact@kalisio.com"

ARG KUBECTL_VERSION=1.25.16
ARG SOPS_VERSION=3.8.1
ARG YQ_VERSION=4.40.5

# age to decrypt files
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

# Github Actions specific user
#  - uses uid 1001 as github runner user, see. https://github.com/actions/runner/blob/main/images/Dockerfile
#    if not using 1001, we get errors during the checkout phase, i'm not exactly sure why
#    > Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_899f9c24-3a0c-41ce-8a21-a24ccd4afac5'
#  - belong to group 127 to be able to use docker
#    Github Actions seem to mount docker.sock in user container and has the following permissions:
#    > srw-rw---- 1 root 127 0 Jan 24 16:04 /var/run/docker.sock
RUN \
  groupadd gha-docker --gid 127 && \
  adduser --disabled-password --gecos "" --uid 1001 gha-user && \
  usermod -aG gha-docker gha-user

# Use github action user by default for now ...
USER gha-user
WORKDIR /home/gha-user
