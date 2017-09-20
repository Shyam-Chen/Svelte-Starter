#!/bin/bash

set -eux

docker-compose exec app yarn prod
docker-compose exec app yarn lint
docker-compose exec app yarn unit
docker-compose exec app yarn e2e
