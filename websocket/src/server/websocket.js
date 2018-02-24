const log = require('./common/log');
const WebSocket = require('ws');

const initialize = (server) => {
    const wss = new WebSocket.Server({
        server
    });

    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url, true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

        ws.on('message', function incoming(message) {
            log.debug('received: %s', message);
        });

        ws.send('something');
    });

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
        log.debug(`Roundtrip time: ${Date.now() - data} ms`);

        setTimeout(function timeout() {
            ws.send(Date.now());
        }, 500);
    });
};

module.exports = {
    initialize: initialize
};