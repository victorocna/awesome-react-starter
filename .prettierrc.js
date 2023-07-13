module.exports = {
  // Prettier default config
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  // Prettier sort imports and tailwind css
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // order really matters
  ],
  pluginSearchDirs: false,
  importOrder: ['^@(.*)/(.*)$', '^[./]'], // similar to Alt+Shift+O in VS Code
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['classnames'],
};
