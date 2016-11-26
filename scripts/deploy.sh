#!/bin/bash

set -ex

docker-compose exec app yarn run prod
docker-compose exec app npm run deploy -- --token ${FIREBASE_TOKEN}
