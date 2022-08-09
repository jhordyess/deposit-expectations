#!/bin/bash
sudo npm i -g update npm
npm i react react-dom
npm init -y
mkdir -p src/components public
touch src/index.js src/components/App.jsx public/index.html webpack.config.js
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i -D webpack webpack-cli webpack-dev-server
npm i -D html-loader html-webpack-plugin