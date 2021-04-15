const pino = require('pino');

const isProduction = process.env.NODE_ENV === 'production';
const logsEnabled = process.env.LOG_EVERYWHERE === 'yes';

const logger = pino({
  enabled: !isProduction || logsEnabled,
});

module.exports = logger;
module.exports.logger = logger;
