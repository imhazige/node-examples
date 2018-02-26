const express = require('express');
const http = require('http');
const url = require('url');

const app = express();

app.use('static',express.static('../client/build'))

app.use('/hello',function (req, res) {
  res.send({
    msg: "hello"
  });
});

const server = http.createServer(app);
//raw
const ws = require('./raw-websocket')
ws.initialize(server);

//
const sockjs = require('./sockjs-websocket');
sockjs.initialize(server);

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
