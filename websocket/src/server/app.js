const express = require('express');
const http = require('http');
const url = require('url');
const ws = require('./websocket')


const app = express();

app.use(function (req, res) {
  res.send({
    msg: "hello"
  });
});

const server = http.createServer(app);

ws.initialize(server);
server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
