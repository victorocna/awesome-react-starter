require('dotenv').config();
const headers = require('./headers');

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    APP_BASE_URL: process.env.APP_BASE_URL,
    FONT_AWESOME_KEY: process.env.FONT_AWESOME_KEY,
    JWT_TOKEN_NAME: process.env.JWT_TOKEN_NAME,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    SHOW_FORM_DEBUG: process.env.SHOW_FORM_DEBUG,
    SHOW_LOGS_EVERYWHERE: process.env.SHOW_LOGS_EVERYWHERE,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      // Apply security headers to all routes
      {
        source: '/:path*',
        headers,
      },
      // Cache images and icons for 1 year
      {
        source: ['/images/:path*', '/icons/:path*'],
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/mgt-portal/admin/:path*',
        destination: '/admin/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: '/404',
        permanent: false,
      },
    ];
  },
  generateEtags: false,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  devIndicators: false,
};
