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

echo "PROJECT_FILE: " ${PROJECT_FILE}
PROJECT_PATH="${PWD}/../${PROJECT_FILE}"
echo "PROJECT_PATH: " ${PROJECT_PATH}
echo "-----------------------"
echo "We will generate the koa service in ../"
echo "-----------------------"

cd ../;
mkdir ${PROJECT_FILE};
cd PROJECT_FILE;
npm init
git init
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev eslint-plugin-import
npm install --save-dev eslint-plugin-jsdoc
npm install --save-dev eslint-plugin-mocha
npm install --save-dev husky
npm install --save-dev mocha
npm install --save-dev validate-commit-msg
npm install koa
npm install @koa/router
npm install koa-bodyparser
npm install lodash
npm install config
npm install joi
npm install koa-conditional-get
npm install koa-etag
npm install koa-helmet
npm install koa2-cors
npm install lodash
npm install log4js
npm install node-fetch
npm install querystring
npm install uuid
npm install restify-errors

# todo cp project

