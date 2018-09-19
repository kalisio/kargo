version: '3.5'

services: 
  weacast-WEACAST_MODEL:
    image: localhost:5000/weacast-WEACAST_MODEL
    environment:
      - DB_URL=mongodb://mongodb:27017/weacast
    networks:
      - kargo-network
    configs:
      - source: weacast-WEACAST_MODEL_jobfile
        target: /jobfile.js
    deploy:
      replicas: 1
      placement:
        constraints:
         - node.role == weacast
      restart_policy:
        condition: on-failure

configs:
  weacast-WEACAST_MODEL_jobfile:
    file: ./configs/weacast/jobfile-WEACAST_MODEL.js

networks:
  kargo-network:
    name: ${DOCKER_NETWORK}
    external: true
          
