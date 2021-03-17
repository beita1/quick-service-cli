const Koa = require('koa');
const config = require('config');
const bodyParser = require('koa-bodyparser');

const { logger } = require('./lib');
const {
  logHandler, formatHandler, errorHandler, contextHandler,
} = require('./middleware');
const router = require('./controller');

const app = new Koa();

const gracefulShutdown = () => {
  // db shutdown

  // server.close

  process.exitCode = 1;
}

module.exports.init = async () => {
  logger.info('init server');

  // init service

  // register router
  app.use(contextHandler);
  app.use(errorHandler);
  app.use(logHandler);
  app.use(formatHandler);
  app.use(bodyParser());
  router.register(app);

  app.listen(config.get('listen_port'));

  process.on('SIGTERM', gracefulShutdown); // Handle kill commands
  process.on('uncaughtException', gracefulShutdown); // Prevent dirty exit on code-fault crashes:
  process.on('unhandledRejection', gracefulShutdown); // Prevent promise rejection exits
};

module.exports.shutdown = async () => {
  process.exitCode = 1;
};
