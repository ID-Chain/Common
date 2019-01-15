FROM ubuntu:16.04

ARG uid=1000
ARG indy_stream=stable

# (exclusive) initial port nr for indy nodes to bind to
# 9700 means the 4 nodes will be available at 9701-9708
ENV IDC_PORT_START=9700
ENV IDC_POOL_NAME=sandbox

# Install environment
RUN apt-get update -y && apt-get install -y \
	curl \
	git \
	gosu \
	wget \
	python3.5 \
	python3-pip \
	python-setuptools \
	python3-nacl \
	apt-transport-https \
	ca-certificates \
	supervisor \
	vim

RUN pip3 install -U \
	pip==9.0.3 \
	setuptools

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 68DB5E88
RUN echo "deb https://repo.sovrin.org/deb xenial $indy_stream" >> /etc/apt/sources.list

RUN useradd -ms /bin/bash -u $uid indy

ARG indy_plenum_ver=1.4.45
ARG indy_anoncreds_ver=1.0.11
ARG indy_node_ver=1.4.66
ARG python3_indy_crypto_ver=0.4.1
ARG indy_crypto_ver=0.4.0

RUN apt-get update -y && apt-get install -y \
        indy-plenum=${indy_plenum_ver} \
        indy-anoncreds=${indy_anoncreds_ver} \
        indy-node=${indy_node_ver} \
        python3-indy-crypto=${python3_indy_crypto_ver} \
        libindy-crypto=${indy_crypto_ver}

COPY docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/bin/docker-entrypoint.sh"]
CMD ["/usr/bin/supervisord"]

