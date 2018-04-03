const winston = require('winston');

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(), 
        new winston.transports.File({ filename: 'next-example.log' })
    ]
});

module.exports = logger;