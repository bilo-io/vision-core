#!/bin/bash

echo "Deleting old '/dist' folder"

rm -rf dist

echo "Creating new '/dist' folder"

mkdir dist

cp package.json ./dist
cp -r lib ./dist

