
# export MONGO_URL=false
# the collection name, you need not change this
export MONGO_DB_NAME=meteor-test
# the mongo url, you should change it to your local mongo database
export MONGO_URL=mongodb://localhost:27017/$MONGO_DB_NAME
# the meteor path 
METEOR="C:\Users\Administrator\AppData\Local\.meteor\meteor.bat"

"$METEOR" npm start