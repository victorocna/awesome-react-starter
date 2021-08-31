/**
 * Security headers used in the app
 * @see https://infosec.mozilla.org/guidelines/web_security
 */
module.exports = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'Server', value: 'Apache' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'sameorigin' },
  { key: 'X-XSS-Protection', value: '1' },
  { key: 'Referrer-Policy', value: 'same-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=*' },
];
