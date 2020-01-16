#!/usr/bin/env bash

set -e

npm run build

cd dist

git init

git config user.name "Zori Yeghikyan"

git config user.email "zori.egikyan@gmail.com"

git add .

git commit -m "deploy"

git push -f https://github.com/zori7/vue-example-app.git master:gh-pages

cd -
