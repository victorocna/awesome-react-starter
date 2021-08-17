require('dotenv').config();

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    LOG_EVERYWHERE: process.env.LOG_EVERYWHERE,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
  webpack5: true,
};
