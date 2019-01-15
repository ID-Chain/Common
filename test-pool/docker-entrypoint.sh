#!/usr/bin/env bash
set -e

if [ -z "$IDC_POOL_IP" ]
	then
		echo "missing required variable IDC_POOL_IP"
		exit 1
fi

echo "starting pool $IDC_POOL_NAME at $IDC_POOL_IP"

cat <<EOF > /etc/supervisord.conf
[supervisord]
logfile = /tmp/supervisord.log
logfile_maxbytes = 50MB
logfile_backups=10
logLevel = error
pidfile = /tmp/supervisord.pid
nodaemon = true
minfds = 1024
minprocs = 200
umask = 022
user = indy
identifier = supervisor
directory = /tmp
nocleanup = true
childlogdir = /tmp
strip_ansi = false

[program:node1]
command=start_indy_node Node1 ${IDC_POOL_IP} $((IDC_PORT_START+1)) ${IDC_POOL_IP} $((IDC_PORT_START+2))
directory=/home/indy
stdout_logfile=/tmp/node1.log
stderr_logfile=/tmp/node1.log

[program:node2]
command=start_indy_node Node2 ${IDC_POOL_IP} $((IDC_PORT_START+3)) ${IDC_POOL_IP} $((IDC_PORT_START+4))
directory=/home/indy
stdout_logfile=/tmp/node2.log
stderr_logfile=/tmp/node2.log

[program:node3]
command=start_indy_node Node3 ${IDC_POOL_IP} $((IDC_PORT_START+5)) ${IDC_POOL_IP} $((IDC_PORT_START+6))
directory=/home/indy
stdout_logfile=/tmp/node3.log
stderr_logfile=/tmp/node3.log

[program:node4]
command=start_indy_node Node4 ${IDC_POOL_IP} $((IDC_PORT_START+7)) ${IDC_POOL_IP} $((IDC_PORT_START+8))
directory=/home/indy
stdout_logfile=/tmp/node4.log
stderr_logfile=/tmp/node4.log
EOF

# substitute hardcoded port start in generate_indy_pool_transactions script
sed -i 's/9700/'$((IDC_PORT_START))'/g' /usr/local/bin/generate_indy_pool_transactions

awk -v POOL_NAME="'${IDC_POOL_NAME:-sandbox}'" \
	'{if (index($1, "NETWORK_NAME") != 0) {print("NETWORK_NAME = " POOL_NAME)} else print($0)}' /etc/indy/indy_config.py > /tmp/indy_config.py

mv /tmp/indy_config.py /etc/indy/indy_config.py
chown indy:indy /etc/indy/indy_config.py

su -c 'generate_indy_pool_transactions --nodes 4 --clients 5 --nodeNum 1 2 3 4 --ips="$IDC_POOL_IP,$IDC_POOL_IP,$IDC_POOL_IP,$IDC_POOL_IP" --network=$IDC_POOL_NAME' indy > ~indy/generate_transactions_report.txt

echo "Pool transactions genesis:"
cat /var/lib/indy/${IDC_POOL_NAME}/pool_transactions_genesis

echo "Adding Trust Anchor NYM transactions to domain genesis..."
echo "New Domain transactions genesis:"
cat <<EOF >> /var/lib/indy/${IDC_POOL_NAME}/domain_transactions_genesis
{"reqSignature":{},"txn":{"data":{"dest":"Gc3HWtzjBuaGyMkSHgomzx","role":"101","verkey":"~CK14LUuXvboBbA6WuBsjsG"},"metadata":{"from":"V4SGRU86Z58d6TV7PBUe6f"},"type":"1"},"txnMetadata":{"seqNo":11},"ver":"1"}
{"reqSignature":{},"txn":{"data":{"dest":"BJqX84hzz2MEaDXNK4SLPK","role":"101","verkey":"~5VXoB6qMMReURhFWi9AxAN"},"metadata":{"from":"V4SGRU86Z58d6TV7PBUe6f"},"type":"1"},"txnMetadata":{"seqNo":12},"ver":"1"}
{"reqSignature":{},"txn":{"data":{"dest":"3NnbYBdhyHfuFZnbaZhuU6","role":"101","verkey":"~RG6F3HwCxs4s2nwq63DQpH"},"metadata":{"from":"V4SGRU86Z58d6TV7PBUe6f"},"type":"1"},"txnMetadata":{"seqNo":13},"ver":"1"}
{"reqSignature":{},"txn":{"data":{"dest":"HAKZVdgXM7569jNyizNyAN","role":"101","verkey":"~9A3ZFcNqtMTcb9zDboCP6U"},"metadata":{"from":"V4SGRU86Z58d6TV7PBUe6f"},"type":"1"},"txnMetadata":{"seqNo":14},"ver":"1"}
EOF

cat /var/lib/indy/${IDC_POOL_NAME}/domain_transactions_genesis

exec gosu indy "$@"

