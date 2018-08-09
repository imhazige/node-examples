FROM ubuntu:xenial

# RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*

# VOLUME /data
EXPOSE 27017 27018 27019

# COPY docker-entrypoint.sh /usr/local/bin/
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y g++ build-essential
#see https://github.com/nodejs/node-gyp/issues/454
RUN npm install run-rs -g --allow-root --unsafe-perm
# RUN rm -rf //data/27017
# RUN mkdir -p //data/27017
# RUN rm -rf //data/27018
# RUN mkdir -p //data/27018
# RUN rm -rf //data/27019
# RUN mkdir -p //data/27019
# RUN run-rs -v 4.0.1 --keep

CMD /bin/bash

#docker build --rm -f Dockerfile -t mongo:rs .