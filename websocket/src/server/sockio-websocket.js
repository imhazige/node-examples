const log = require('./common/log');
const url = require('url');

const initialize = (server) => {

  const io = require('socket.io')(server, {
    path: '/notwork'
    // serveClient: false,
    // below are engine.IO options
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
  });

  io.on('connection', function(socket){
    console.log('socket-io new connection');
    socket.on('message', function (data) {
      console.log(data);
      socket.emit('socketid response >> ' + data);
    });
    
  });
};

module.exports = {
  initialize: initialize
};