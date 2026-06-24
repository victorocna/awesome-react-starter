# Coding standards

## Rules

- Do NOT create new files and folders in the project root (unless adding `agents.md` as explicitly permitted)
- All `if` statements MUST be wrapped with curly braces `{}` (no single-line blockless `if` statements)
- Only complicated JS/TS functions require JSDoc documentation. Basic functions and standard React components do not need it.
- Always use understandable, self-describing variable and function naming conventions
- Only use TypeScript (`.ts` or `.tsx`) for React hooks, complex type definitions, or advanced components that absolutely require it (e.g., `data-table.tsx`). Basic components MUST remain JavaScript (`.js` or `.jsx`)
- Use the `getLayout` standard for creating page layouts in the Pages Router. Do NOT wrap pages directly in `<Layout>` in the render return
- Order imports and environment variables by name (A-Z)
- Use Node ES6 imports instead of `require` in all new files
- Use only one default export for every new file, except `index.js` files
- Write short files, maximum 40-50 lines of code for every new file (excluding JSDoc comments where possible)
- Use comments and empty lines to delimit groups of code that belong together
- Use `@aliases` instead of relative paths when importing files
- Do NOT add new NPM packages unless explicitly instructed

## Recommendations

- Files SHOULD do only one thing - [Single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- Files SHOULD use the return early logic - [Return early](https://en.wiktionary.org/wiki/early_return)
