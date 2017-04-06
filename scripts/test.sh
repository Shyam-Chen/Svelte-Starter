#!/bin/bash

set -eux

case $MODE in
  "docker" )
    docker-compose exec app yarn run prod
    docker-compose exec app yarn run lint
    docker-compose exec app yarn run unit
    docker-compose exec app yarn run e2e
    ;;
  "prod" )
    yarn run prod
    ;;
  "lint" )
    yarn run lint
    ;;
  "unit" )
    yarn run unit
    ;;
  "e2e" )
    yarn run prod
    yarn run e2e
    ;;
esac
