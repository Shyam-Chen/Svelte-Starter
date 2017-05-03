#!/bin/bash

set -eux

if [[ "$MODE" == "docker" ]]; then
  docker-compose exec app yarn run deploy -- --token ${FIREBASE_TOKEN}
fi
