#!/bin/bash

set -ex

if [[ "$MODE" == "e2e" ]]; then
  yarn run webdriver
fi
