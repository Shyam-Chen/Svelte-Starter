#!/bin/bash

set -eux

# if [[ -f ${DOCKER_CACHE_FILE} ]]; then
#   gunzip -c ${DOCKER_CACHE_FILE} | docker load
# fi

docker-compose up -d
