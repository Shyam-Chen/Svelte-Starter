#!/bin/bash

set -eux

if [[ "$MODE" == "docker" ]]; then
  docker-compose up -d
  docker-compose exec app yarn run webdriver
fi

if [[ "$MODE" == "unit" ]]; then
  yarn run lib
fi

if [[ "$MODE" == "e2e" ]]; then
  yarn run webdriver && yarn run prod
fi

case word in
  pattern )
    ;;
esac
