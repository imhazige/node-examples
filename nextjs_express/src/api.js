const t1Api = require('./api/t1Api');

module.exports = function (server) {
    server.use('/api/v1/t1', t1Api);
}
