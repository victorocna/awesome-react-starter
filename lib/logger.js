const pino = require('pino');

const isProduction = process.env.NODE_ENV === 'production';
const logsEnabled = process.env.SHOW_LOGS_EVERYWHERE === 'yes';

const logger = pino({
  enabled: !isProduction || logsEnabled,
});

module.exports = logger;
