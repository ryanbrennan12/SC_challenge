const express = require('express');
const bodyParser = require('body-parser');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ prettyPrint: { colorize: true } })
const expressLogger = expressPino({ logger });
const routes = require('./routes');

const PORT = 3000;
const app = express();

app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next();
 });

app.use('/api', routes);

app.get('/', (req, res) => {
  // logger.debug('Calling res.send');
  res.send('Hey worlds')
})

app.listen(PORT, () => {
  logger.info('Server running on port %d', PORT);
});


