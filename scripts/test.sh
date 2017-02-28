#!/bin/bash

set -ex

if [[ "$MODE" == "docker" ]]; then
  docker-compose exec app yarn run prod
  docker-compose exec app yarn run lint
  docker-compose exec app yarn run test
  docker-compose exec app yarn run e2e
fi

if [[ "$MODE" == "prod" ]]; then
  yarn run prod
fi

if [[ "$MODE" == "lint" ]]; then
  yarn run lint
fi

if [[ "$MODE" == "unit" ]]; then
  yarn run test
fi

if [[ "$MODE" == "e2e" ]]; then
  yarn run prod && yarn run e2e
fi
