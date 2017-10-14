#!/bin/bash

set -eux

docker-compose exec app yarn codecov -- --token=${CODECOV_TOKEN}
docker-compose exec app bash -c "cd functions && yarn install"
docker-compose exec app yarn deploy -- --token ${FIREBASE_TOKEN}
