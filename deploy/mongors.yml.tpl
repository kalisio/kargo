version: '3.5'

services:
  ${MONGORS_NAME}db0:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet mongors
    volumes:
      - mongodb0_data:/data/db
    configs:
      - source: mongodb0_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
         - node.labels.mongodb0 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

  ${MONGORS_NAME}db1:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet mongors
    volumes:
      - mongodb1_data:/data/db
    configs:
      - source: mongodb1_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.mongodb1 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

  ${MONGORS_NAME}db2:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet mongors
    volumes:
      - mongodb2_data:/data/db
    configs:
      - source: mongodb2_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.mongodb2 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

configs:
  mongodb0_conf:
    file: ./../configs/mongors/mongodb.conf
  mongodb1_conf:
    file: ./../configs/mongors/mongodb.conf
  mongodb2_conf:
    file: ./../configs/mongors/mongodb.conf
  
volumes:
  mongodb0_data: {}
  mongodb1_data: {}
  mongodb2_data: {}

networks:
  kargo-back-network:
    name: ${DOCKER_BACK_NETWORK}
    external: true
