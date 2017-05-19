#!/bin/bash

set -eux

if [[ "$MODE" == "docker" ]]; then
  docker-compose exec app dpl --provider firebase --token ${FIREBASE_TOKEN} --project web-go-demo
fi
