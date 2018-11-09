#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Publish New Version of Documentation'

git push -f git@github.com:ID-Chain/ID-Chain.github.io.git master

cd -
