# IdentityChain All Components

Docker-compose configuration to run all components (they will re-use the same IEA API)
By running some simple commands you can run all the components for our use case:

    - Government Legacy Web Server
    - Chamber Of Commerce Legacy Web Server
    - IEA API
    - Mongo DB
    - Admin UI
    - Schema Extensions API

> Please notice all commands expect you are inside the folder of the repository where THIS README file is located

## Run in the cloud (Reachable External Pool)

> Currently the Mobile Edge Agent Application is only configured for our test environment

Some of the components need to be accessible from the Internet, like the Cloud Agent, Pool and IEA API endpoint

```bash
cp env-example .env
./display-cloud-info.sh

# Modify .env file with the values printed by the command

docker-compose up -d
```