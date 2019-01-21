#!/usr/bin/env bash

set -e

PUBLIC_IP=`curl -s ident.me`
PUBLIC_NETWORK=`echo $PUBLIC_IP | sed -e 's/\.[0-9]\+$/.0/'`

echo "Public IP to be used in IDC_POOL_IP variable: ${PUBLIC_IP}"
echo "Public IP to be used in IDC_POOL_SUBNET variable: ${PUBLIC_NETWORK}/24"
echo "Please remember to configure you firewall to allow traffic on the exposed pool ports!"
