#!/bin/bash

set -eux

docker-compose up -d
docker-compose exec app yarn gulp -- webdriver
