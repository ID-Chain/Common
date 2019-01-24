# IdentityChain Test Pool Dockerfile

Dockerfile configuration for our indy test-pool image. This image is based on the [Getting Started] documentation found in 
[Hyperledger Indy SDK repository]. We added some NYM transactions into the genesis pool transaction file. This identities (DIDs)
were created using seeds to make them reproducible and have the role of TRUST_ANCHORS (TA). For our use-case we added 4 TA DIDs for:

* Government
* Chamber Of Commerce
* Cloud Agent
* ING Bank

> Please notice all commands expect you are inside the test-pool folder of the repository (Where this README file is located)

## Build

Build Docker image with organization tag
```
docker build -t idchain/test-pool:<version> .
```

## Publish

Push Docker image to DockerHub (Only for users with permissions)

```bash
docker login
cat .dockerHubVersion
docker build -t idchain/test-pool:<version> .
docker push idchain/test-pool:<version>
# Increment version reference in Docker Hub Version file & push changes to Git
vi .dockerHubVersion
git add .dockerHubVersion
git commit -m "Published new Docker image into DockerHUB with version: <version>"
git push
```

## Run container

Configuration can be provided using environment variables

- IDC_POOL_IP IP at which this pool is reachable (required)
- IDC_POOL_NAME for the pool name (default is sandbox)
- IDC_PORT_START for (exclusive) initial port the pool nodes should bind to, e.g. if it is 9700 then 
the pool nodes will bind to ports 9701-9708 (default is 9700)

```bash
docker run -e IDC_POOL_IP=172.16.0.100 -p 8000:8000 idchain/test-pool:<version>
```

## Run in the cloud (Reachable from Public IP Address) - Docker Compose

Currently, our test environment runs in the Cloud. If we want the pool to be reachable from the outside of the virtual machine,
we need to use in the external clients the same pool_transactions_genesis file. This file contains the IP and PORTs of the nodes,
in our case (for this test-pool) all nodes run in one container inside a virtual machine. Therefore we will need to use the same
IP address with different ports. This IP address needs to be resolvable from external DNS. In order to simplify the set up, we
decided to use in the internal Docker Network the same Public IP address as the one assigned to the virtual machine.

```bash
cp env-example .env
./display-cloud-info.sh

# Modify .env file with the values printed by the command

docker-compose up -d
```

## Get generated pool transaction genesis file to be used by any agent willing to connect to it

This docker image exposes the logs of the nodes and the genesis files using a HTTP server on port 8001 (default)

```bash
curl <IDC_POOL_IP>:8001/pool_transactions_genesis
```

## Added Trust Anchor NYM Transactions

In this PoC we will skip the onboarding of Trust Anchors NYMs. Therefore, 4 NYM transactions where added to the domain
transactions genesis. These DIDs where generated using seeds, so at any time the owners could regenerate them.

* Government
    * Seed 0000000000000000000000Government
    * DID is Gc3HWtzjBuaGyMkSHgomzx
    * Verification key is ~CK14LUuXvboBbA6WuBsjsG
    
* Chamber of Commerce
    * Seed 00000000000000000000000000000Kvk
    * DID is BJqX84hzz2MEaDXNK4SLPK
    * verification key is ~5VXoB6qMMReURhFWi9AxAN

* Cloud Agent
    * Seed 0000000000000000000000CloudAgent
    * DID is 3NnbYBdhyHfuFZnbaZhuU6
    * Verification key is ~RG6F3HwCxs4s2nwq63DQpH

* ING Bank
    * Seed 00000000000000000000000000000ING
    * DID is HAKZVdgXM7569jNyizNyAN
    * Verification key is ~9A3ZFcNqtMTcb9zDboCP6U
    

