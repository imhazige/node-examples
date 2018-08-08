#
# see https://github.com/vkarpov15/run-rs
#


#this did work, but not work in windows?
PROJECT_DATA_TMP=$(pwd)/tmp/mongo
#change to your path
PROJECT_DATA_TMP=D:/work/git/node-examples/meteor/tmp/mongo
echo $PROJECT_DATA_TMP

# pull docker
# docker build --rm -f Dockerfile -t mongo:rs .
docker run -d -p 27001:27017 -p 27002:27018 -p 27003:27019 --name mongo --restart=always mongo:rs
