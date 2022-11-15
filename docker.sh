#!/bin/bash
cp -av ./public/ ./docker/public/
cp -av ./src/ ./docker/src/
cp -v ./package.json ./docker/package.json
cp -v ./webpack.config.prod.js ./docker/webpack.config.prod.js
docker build -t jhordyess/simloc ./docker &&
  docker run -d --rm -p 80:80 jhordyess/simloc
rm -rv docker/public docker/src docker/package.json docker/webpack.config.prod.js
