module.exports = {
  // Prettier default config
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',

  // Prettier sort imports and tailwind css
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // order really matters
  ],
  // similar to Alt+Shift+O in VS Code
  importOrder: [
    '^@(.*)$', // @hooks, @components
    '<THIRD_PARTY_MODULES>', // react, lodash
    '^[./]', // everything else
  ],
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['classnames'],
};
