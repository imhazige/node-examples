var http = require('http');
const log = require('./common/log');
var sockjs = require('sockjs');

const initialize = (server) => {
    var echo = sockjs.createServer({
        sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
    });
    echo.on('connection', function (conn) {
        log.info('sockjs new connection start...');
        conn.on('data', function (message) {
            conn.write('sockjs response >>' + message);
        });
        conn.on('close', function () {});
    });

    echo.installHandlers(server, {
        prefix: '/sockjs'
    });

}

module.exports = {
    initialize : initialize
};