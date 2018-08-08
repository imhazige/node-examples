#
# see https://github.com/luamas/docker-mongo-local-replicaset
#


#this did work, but not work in windows?
PROJECT_DATA_TMP=$(pwd)/tmp/mongo
#change to your path
PROJECT_DATA_TMP=D:/work/git/node-examples/meteor/tmp/mongo
echo $PROJECT_DATA_TMP

# pull docker
docker pull luamas/docker-mongo-local-replicaset

docker run -d -p 27001:27001 -p 27002:27002 -p 27003:27003 --name mongo -v "":/data -e "REPLICA_SET_NAME=mongo-rs" -e "USERNAME=dev" -e "PASSWORD=dev" --restart=always luamas/docker-mongo-local-replicaset