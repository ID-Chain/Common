#!/usr/bin/env bash

set -e

docker login
VERSION=`cat ./.dockerHubVersion`
echo "Next Version? (current: "${VERSION}")"
read nversion
echo "Let's build new image with tag: idchain/test-pool:"${nversion}
docker build . -t idchain/test-pool:${nversion}
docker push idchain/test-pool:${nversion}
echo ${nversion} > ./.dockerHubVersion

git add ./.dockerHubVersion
msg=`echo New test-pool image release version: ${nversion}`
echo ${msg}
git commit -m "$msg"
git push
