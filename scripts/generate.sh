#!/usr/bin/env bash

# make sure we're in the project root
cd "$(dirname "$0")/.."

PROJECT_FILE="quick-server-temp"
while getopts ":n:" opt; do
  case ${opt} in
    n)
      PROJECT_FILE=$OPTARG
      ;;
  esac
done

cd ../;
mkdir ${PROJECT_FILE};
cd PROJECT_FILE;
npm init
git init
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev husky 
npm install --save-dev validate-commit-msg
npm install koa
npm install @koa/router
npm install koa-bodyparser
npm install lodash
