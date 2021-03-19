#!/bin/bash
[[ ! -z "${K_SWARM-}" ]] && return
K_SWARM=1

this_swarm_node() {
    uname -n
}

all_swarm_nodes() {
    docker node ls --format "{{.Hostname}}"
}

other_swarm_nodes() {
    docker node ls --format "{{.Hostname}}" | grep -v $(this_swarm_node)
}

docker_id_from_name() {
    local NAME=$1
    docker ps --filter "status=running" --filter "name=${NAME}" --format "{{.ID}}" | head -1
}
