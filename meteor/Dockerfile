FROM node:8.11

# RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*

VOLUME /data
EXPOSE 27017 27018 27019

# COPY docker-entrypoint.sh /usr/local/bin/
RUN npm install run-rs -g
RUN run-rs -v 4.0.1 --keep

# ENTRYPOINT ["docker-entrypoint.sh"]

#docker build --rm -f Dockerfile -t mongo:rs .