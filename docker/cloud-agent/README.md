# IdentityChain Cloud Agent

Docker-compose configuration for our Cloud Agent Implementation.

> Please notice all commands expect you are inside the folder of the repository where THIS README file is located

## Run in the cloud (Reachable External Pool)

```bash
cp env-example .env
./display-cloud-info.sh

# Modify .env file with the values printed by the command

docker-compose up -d
```