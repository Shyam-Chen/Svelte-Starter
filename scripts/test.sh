#!/bin/bash

set -eux

docker-compose exec app yarn run prod
docker-compose exec app yarn run lint
docker-compose exec app yarn run unit
docker-compose exec app yarn run e2e
