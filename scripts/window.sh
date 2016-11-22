#!/bin/bash

Xvfb :99.0 -ac -screen 0 1366x768x16 -nolisten tcp &

exec "$@"
