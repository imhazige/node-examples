#
# see https://github.com/vkarpov15/run-rs
#


#this did work, but not work in windows?
PROJECT_DATA_TMP=$(pwd)/tmp/mongo
#change to your path
PROJECT_DATA_TMP=D:/work/git/node-examples/meteor/tmp/mongo
echo $PROJECT_DATA_TMP

#build docker
DOCKER_TAG=mongo:rs-my
# docker build $DOCKER_TAG .

# pull docker
# docker build --rm -f Dockerfile -t $DOCKER_TAG .
docker run -it -p 27001:27017 -p 27002:27018 -p 27003:27019 --name mongo  $DOCKER_TAG
