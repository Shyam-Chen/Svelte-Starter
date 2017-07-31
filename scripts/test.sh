#!/bin/bash

set -eux

docker-compose exec app yarn prod
docker-compose exec app yarn lint
docker-compose exec app yarn unit
docker-compose exec app yarn e2e

# mkdir -p $(dirname ${DOCKER_CACHE_FILE})
# docker save $(docker history -q appleboy/drone-line:latest | grep -v '<missing>') | gzip > ${DOCKER_CACHE_FILE}
