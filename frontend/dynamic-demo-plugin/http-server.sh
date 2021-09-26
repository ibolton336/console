#!/usr/bin/env bash
_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $_dir
#ts-node $_dir/deploy/main.js
nodemon --inspect $_dir/deploy/main.js
