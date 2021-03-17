#!/usr/bin/env bash
PROJECT_PATH=""
CONFIG_PATH="${PWD}/config/"
PROJECT_FILE="quick-server-temp"
while getopts ":n:" opt; do
  case ${opt} in
    n)
      PROJECT_FILE=$OPTARG
      ;;
  esac
done

echo "PROJECT_FILE: " ${PROJECT_FILE}
echo "-----------------------"
PROJECT_PATH="${PWD}/../${PROJECT_FILE}"
echo "PROJECT_PATH: " ${PROJECT_PATH}
echo "-----------------------"
cp -r ${CONFIG_PATH} ${PROJECT_PATH}