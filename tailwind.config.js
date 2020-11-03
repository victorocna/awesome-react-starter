const forms = require('@tailwindcss/custom-forms');

module.exports = {
  important: true,
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        charcoal: '#353B50',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
      },
    },
  },
  purge: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
