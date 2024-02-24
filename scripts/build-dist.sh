#!/bin/bash

echo "Deleting old '/dist' folder"

rm -rf dist

echo "Creating new '/dist' folder"

mkdir dist

cp package.json ./dist
cp -r lib ./dist

echo "
      .__       .__
___  _|__| _____|__| ____   ____             ____  ___________   ____
\  \/ /  |/  ___/  |/  _ \ /    \   ______ _/ ___\/  _ \_  __ \_/ __ \
 \   /|  |\___ \|  (  <_> )   |  \ /_____/ \  \__(  <_> )  | \/\  ___/
  \_/ |__/____  >__|\____/|___|  /          \___  >____/|__|    \___  >
              \/               \/               \/                  \/
"