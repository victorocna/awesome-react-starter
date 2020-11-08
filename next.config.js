require('dotenv').config();

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
};
