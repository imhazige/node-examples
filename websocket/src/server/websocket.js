const log = require('./common/log');

const initialize = (server) => {
    var ioserver = require('socket.io')(server, {
        path: '/socket'
    });

    //connect to echo test
    const io = require('socket.io-client');
    const socket = io('echo.websocket.org', {
        path: null,
        transports: ['websocket'],
        autoConnect: false
    });

    socket.on('disconnect', () => {
        log.warn('disconneced..., reconnect...');
        socket.open();
    });

    socket.on('ping', () => {
        log.debug('ping');
    });

    socket.on('connect', () => {
        log.warn('connected');
    });

    socket.on('connect_error', (error) => {
        log.error('connect_error', error);
    });

    socket.on('connect_timeout', (timeout) => {
        log.error('connect_timeout', timeout);
    });

    socket.on('error', (error) => {
        log.error('error', error);
    });

    socket.open();

    ioserver.on('connection', function () {

    });
};

module.exports = {
    initialize: initialize
};