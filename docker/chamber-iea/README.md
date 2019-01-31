# IdentityChain Chamber Of Commerce IEA

Docker-compose configuration for one of our Institutional Edge Agents, the Chamber Of Commerce.
By running some simple commands you can run all the components of the Chamber Of Commerce IEA:

    - Chamber Of Commerce Legacy Web Server
    - IEA API
    - Mongo DB
    - Admin UI
    - Schema Extensions API

> Please notice all commands expect you are inside the folder of the repository where THIS README file is located

## Run locally including a Test Pool

```bash
docker-compose -f docker-compose-local.yaml up -d

# When shutdown remove also the volumes:

docker-compose -f docker-compose-local.yaml down -v
```

## Run in the cloud (Reachable External Pool)

```bash
cp env-example .env
./display-cloud-info.sh

# Modify .env file with the values printed by the command

docker-compose up -d
```