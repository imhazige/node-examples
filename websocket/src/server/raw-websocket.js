const log = require('./common/log');
const WebSocket = require('ws');
const url = require('url');

const initialize = (server) => {
    const wss = new WebSocket.Server({
        server
    });

    //server
    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url, true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        log.debug('ws new connection  start..');
        ws.on('message', function incoming(message) {
            log.debug('received: %s', message);
            ws.send('ws response >> ' + message);
        });
    });

    wss.on('error',  (err) => {
        log.error('RAW error');
    });

    //client
    const ws = new WebSocket('wss://echo.websocket.org/', {
        origin: 'https://websocket.org'
    });

    ws.on('open', function open() {
        log.debug('connected');
        ws.send(Date.now());
    });

    ws.on('close', function close() {
        log.debug('disconnected');
    });

    ws.on('message', function incoming(data) {
        ws.send('raw response >> ' + data);        
    });
};

module.exports = {
    initialize: initialize
};