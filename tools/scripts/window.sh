#!/bin/bash

Xvfb :99 -ac -screen 0 1280x1024x16 -nolisten tcp &

exec "$@"
