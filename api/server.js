const bodyParser = require('body-parser');
const Restocat = require('restocat');
const config = require('./config');
const rest = new Restocat(config);
const server = rest.createServer();

// Register logger
const Logger = require('restocat-logger');
const logger = Logger.register(rest.locator);

// Register sequelize connection
const sequelize = require('./lib/sequelize').register(rest.locator);

require('./services').register(rest.locator);

rest.locator.registerInstance('appErrors', require('./lib/errors'));

// Register connect-style middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

if (process.env.NODE_ENV === 'test') {
  const level = 'error';

  logger.loggerRequest.setLevel(level);
  logger.loggerResponse.setLevel(level);
  logger.loggerSystem.setLevel(level);

  module.exports = server;
  return;
}

sequelize
  .sync()
  .then(() =>
    server.listen(config.server.port)
  )
  .then(() => logger.info(`Restocat listen on ${config.server.port} port`))
  .catch(reason => logger.error(reason));