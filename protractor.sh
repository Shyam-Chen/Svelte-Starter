#!/bin/bash

Xvfb :99.0 -ac -screen 0 1280x720x16 -nolisten tcp &

exec "$@"
