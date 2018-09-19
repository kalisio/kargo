version: '3.5'

services: 
  weacast-[WEACAST_MODEL]:
    image: localhost:5000/[WEACAST_MODEL]
    networks:
      - kargo-network
    configs:
      - source: weacast-[WEACAST_MODEL]_jobfile
        target: /jobfile.js
    deploy:
      replicas: 1
      placement:
        constraints:
         - node.role == weacast
      restart_policy:
        condition: on-failure

configs:
  weacast-[WEACAST_MODEL]_jobfile:
    file: ./configs/weacast/jobfile-[WEACAST_MODEL].js

networks:
  kargo-network:
    name: ${DOCKER_NETWORK}
    external: true
          
