#!/bin/bash
[[ ! -z "${K_SWARM-}" ]] && return
K_SWARM=1

this_swarm_node() {
    uname -n
}

other_swarm_nodes() {
    docker node ls | grep Ready | grep -v $(this_swarm_node) | awk '{ print $2 }'
}
