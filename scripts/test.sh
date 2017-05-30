#!/bin/bash

set -eux

docker-compose exec app yarn run prod
docker-compose exec app yarn run lint
docker-compose exec app yarn run unit
docker-compose exec app yarn run e2e

# mkdir -p $(dirname ${DOCKER_CACHE_FILE})
# docker save $(docker history -q appleboy/drone-line:latest | grep -v '<missing>') | gzip > ${DOCKER_CACHE_FILE}
