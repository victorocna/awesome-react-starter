require('dotenv').config();

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    COOKIE_NAME: process.env.COOKIE_NAME,
  },
};
