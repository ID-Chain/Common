<img src="https://id-chain.github.io/square-logo300x300.png" align="left" height="140px" style="margin-right: 30px;" />

# IdentityChain Commons
**Documentation Build </br>**
[![CircleCI](https://circleci.com/gh/ID-Chain/Common.svg?style=shield)](https://circleci.com/gh/ID-Chain/Common)

This repository holds all IdentityChain projects documentation and :whale2: Docker set-up to run our components. Please
see the sub-README files inside the different folders for more details.

## Publishing the docs

> There is a Circle CI job which will automatically build and publish the documentation (master branch only)

Run the following command to publish manually the documentation side:
 ```bash
./publish-docs.sh
```

## Getting Started

## Documentation

> Please see [Hyperledger Indy SDK repository] documentation to get familiar with all the concepts used by this project

If you are already familiar with Hyperledger Indy or simply you want to know more about our project visit our 
documentation side:

:books: https://id-chain.github.io/

## How to run the components

> Prerequisites :point_right: Install Docker [here](https://docs.docker.com/install/) & Docker-compose [here](https://docs.docker.com/compose/install)

### Running the test-pool

The first thing we will need to do is to run an Indy Ledger. Based on the [Getting Started] documentation found in 
[Hyperledger Indy SDK repository], we created a new Docker image which includes some added NYM transactions in the genesis
pool transaction file. This identities were created using seed to make them reproducible and are used by our TRUST_ANCHORS:

* Government
* Chamber Of Commerce

Please see the sub-README file inside test-pool folder for more details.

<!-- References -->
[Hyperledger Indy SDK repository]:https://github.com/hyperledger/indy-sdk
[GettingStarted]:https://github.com/hyperledger/indy-sdk/blob/master/README.md