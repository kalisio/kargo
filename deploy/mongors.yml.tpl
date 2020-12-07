version: '3.8'

services:
  ${MONGORS_NAME}0:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet ${MONGORS_NAME}
    volumes:
      - ${MONGORS_VOLUME_PATH}${MONGORS_NAME}0_data:/data/db
    configs:
      - source: ${MONGORS_NAME}0_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
         - node.labels.${MONGORS_NAME}0 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

  ${MONGORS_NAME}1:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet ${MONGORS_NAME}
    volumes:
      - ${MONGORS_VOLUME_PATH}${MONGORS_NAME}1_data:/data/db
    configs:
      - source: ${MONGORS_NAME}1_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.${MONGORS_NAME}1 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

  ${MONGORS_NAME}2:
    image: ${MONGORS_IMAGE}:${MONGORS_TAG}
    command: mongod --replSet ${MONGORS_NAME}
    volumes:
      - ${MONGORS_VOLUME_PATH}${MONGORS_NAME}2_data:/data/db
    configs:
      - source: ${MONGORS_NAME}2_conf
        target: /etc/mongo/mongod.conf
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.${MONGORS_NAME}2 == true
      restart_policy:
        condition: on-failure
    networks:
      - kargo-back-network

configs:
  ${MONGORS_NAME}0_conf:
    file: ./../configs/mongors/mongodb.conf
  ${MONGORS_NAME}1_conf:
    file: ./../configs/mongors/mongodb.conf
  ${MONGORS_NAME}2_conf:
    file: ./../configs/mongors/mongodb.conf
  
volumes:
  ${MONGORS_NAME}0_data:
  ${MONGORS_NAME}1_data:
  ${MONGORS_NAME}2_data:

networks:
  kargo-back-network:
    name: ${DOCKER_BACK_NETWORK}
    external: true
