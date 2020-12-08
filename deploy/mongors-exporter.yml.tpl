version: '3.5'

services:
  ${MONGORS_NAME}0-exporter:
    image: ${PROMETHEUS_MONGODB_EXPORTER_IMAGE}:${PROMETHEUS_MONGODB_EXPORTER_TAG}
    command:
      - '--mongodb.uri=mongodb://${MONGORS_NAME}0'
      - '--collect.collection'
    deploy:
      replicas: 1
      resources:
        limits:
          memory: 128M
        reservations:
          memory: 64M
    networks:
      - kargo-back-network

  ${MONGORS_NAME}1-exporter:
    image: ${PROMETHEUS_MONGODB_EXPORTER_IMAGE}:${PROMETHEUS_MONGODB_EXPORTER_TAG}
    command:
      - '--mongodb.uri=mongodb://${MONGORS_NAME}1'
      - '--collect.collection'
    deploy:
      replicas: 1
      resources:
        limits:
          memory: 128M
        reservations:
          memory: 64M
    networks:
      - kargo-back-network

  ${MONGORS_NAME}2-exporter:
    image: ${PROMETHEUS_MONGODB_EXPORTER_IMAGE}:${PROMETHEUS_MONGODB_EXPORTER_TAG}
    command:
      - '--mongodb.uri=mongodb://${MONGORS_NAME}2'
      - '--collect.collection'
    deploy:
      replicas: 1
      resources:
        limits:
          memory: 128M
        reservations:
          memory: 64M
    networks:
      - kargo-back-network

networks:
  kargo-back-network:
    name: ${DOCKER_BACK_NETWORK}
    external: true
