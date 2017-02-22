#!/bin/bash

set -ex

if [[ "$MODE" == "docker" ]]; then docker-compose exec app yarn run prod; fi
if [[ "$MODE" == "docker" ]]; then docker-compose exec app yarn run deploy -- --token ${FIREBASE_TOKEN}; fi
