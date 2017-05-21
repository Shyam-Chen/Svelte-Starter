#!/bin/bash

set -eux

# if [[ "$MODE" == "docker" ]]; then
  docker-compose exec app yarn run deploy -- --token ${FIREBASE_TOKEN}
  # docker-compose exec app dpl --provider=firebase --token=${FIREBASE_TOKEN} --project=test-8e666
# fi
