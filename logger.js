const bunyan = require('bunyan');

const log = bunyan.createLogger({
  name: 'challenge',
  stream: process.stdout,
  level: 'info'
});log.info("This is logging")