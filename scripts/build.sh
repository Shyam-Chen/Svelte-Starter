#!/bin/bash

set -eux

case $MODE in
  "docker" )
    docker-compose up -d
    docker-compose exec app yarn run webdriver
    ;;
  "unit" )
    yarn run lib
    ;;
  "e2e" )
    yarn run webdriver
    yarn run prod
    ;;
esac
