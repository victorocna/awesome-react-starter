# Coding standards

## Rules

- Do NOT create new files and folders in the project root
- Order imports and enviroment variables by name (A-Z)
- Use Node ES6 imports instead of `require` in all new files
- Use only one default export for every new file, except `index.js` files
- Write short files, maximum 40-50 lines of code for every new file
- Use comments and empty lines to delimit groups of code that belong together
- Use `@aliases` instead of relative paths when importing files
- Do NOT add new NPM packages unless explicitly instructed

## Recommendations

- Files SHOULD do only one thing - [Single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- Files SHOULD use the return early logic - [Return early](https://en.wiktionary.org/wiki/early_return)
