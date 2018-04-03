const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const next = require('next');

const logger = require('./log');
const api = require('./api');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 8080;

const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();

    // give all Nextjs's request to Nextjs before anything else
    server.get('/_next/*', (req, res) => {
        handle(req, res);
    });

    server.get('/static/*', (req, res) => {
        handle(req, res);
    });

    // server.use(helmet());
    server.use(compression());
    server.use(express.json());

    api(server);

    if (!dev) {
        server.set('trust proxy', 1); // trust first proxy
        sess.cookie.secure = true; // serve secure cookies
    }

    server.listen(port, (err) => {
        if (err) throw err;
        logger.info(`> Ready on ${port}`);
    });
});