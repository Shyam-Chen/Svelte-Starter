#!/bin/bash

set -ex

if [[ "$MODE" == "docker" ]]; then
  docker-compose up -d
fi
