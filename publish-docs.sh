#!/usr/bin/env sh

# abort on errors
set -e

npm i

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git config user.email "traka.konstantinagmail.com"
git config user.name "Deployment Bot"
git add -A
git commit --allow-empty -m 'Publish New Version of Documentation'

# Push quietly to prevent showing the token in log
git push -qf https://${GITHUB_TOKEN}@github.com/ID-Chain/ID-Chain.github.io.git master

cd -
