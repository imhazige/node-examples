const log = require('./common/log');
const url = require('url');

const initialize = (server) => {


  const io = require('socket.io')(server, {
    // path: '/socketio' //path did not work
    // serveClient: false,
    // below are engine.IO options
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
  });

  io.on('connection', function (socket) {
    console.log('socket-io new connection');
    socket.on('message', function (data) {
      // console.log('on message' + data);
      socket.send('socketid response >> ' + data);
    });

  });
};

module.exports = {
  initialize: initialize
};