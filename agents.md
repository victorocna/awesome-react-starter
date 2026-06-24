# Agent Rules & Coding Guidelines

Welcome, AI agent! This repository is the **Awesome React Starter** (built by Chess Coders) using the Next.js Pages Router.

To maintain codebase health, consistency, and performance, you MUST adhere to the following rules at all times.

---

## 1. Strict Code Style Rules

- **All `if` Statements**: Every `if` statement MUST be wrapped with curly braces `{}`. Single-line blockless `if` statements are strictly forbidden.

  ```javascript
  // CORRECT:
  if (condition) {
    doSomething();
  }

  // INCORRECT:
  if (condition) doSomething();
  ```

- **JSDoc Documentation**: Only complicated JS/TS functions require JSDoc documentation. Basic helper functions and standard React components do not need them.
- **Naming Conventions**: Use self-describing, understandable variable and function names.
- **File Length**: Keep files short and single-purpose. Every new file should aim for a maximum of 40–50 lines of code (excluding JSDoc comments).
- **Import Sorting**: Always order imports and environment variables alphabetically (A–Z) by path/name.
- **ES6 Imports**: Use standard ES6 `import`/`export` syntax in all new files; `require` is forbidden.
- **Project Root**: Do NOT create new files or folders directly in the project root. All files must belong to their respective folders.

---

## 2. JavaScript vs. TypeScript Standard

This project supports TypeScript, but we restrict its usage to keep basic layout code clean and highly readable:

- **Default to JavaScript (`.js` / `.jsx`)**: Use JavaScript for all basic UI components, pages, forms, and standard React views.
- **Use TypeScript (`.ts` / `.tsx`) ONLY for**:
  - React custom hooks (e.g., in `hooks/`)
  - Complex type declarations or data models
  - Advanced components that absolutely require TypeScript's type enforcement (such as [components/ui/data-table.tsx](file:///Volumes/SSD/ChessCoders/awesome-react-starter/components/ui/data-table.tsx))

---

## 3. Page Layouts: The `getLayout` Standard

Do NOT wrap page components directly in `<Layout>` wrappers within the page's render return. Instead, use the **Per-Page Layout (`getLayout`) pattern** to preserve layout state (preventing layout unmounts/remounts on page transitions) and support nested layout composition:

1. **In `pages/_app.js`**:
   The app checks if a component defines `getLayout` and wraps the active page accordingly.
2. **On Layout Pages**:
   Import [components/Layout.jsx](file:///Volumes/SSD/ChessCoders/awesome-react-starter/components/Layout.jsx) and attach it dynamically:

   ```jsx
   import { Layout } from '@components';

   export default function DashboardPage() {
     return <div>Dashboard Content</div>;
   }

   DashboardPage.getLayout = function getLayout(page) {
     return <Layout title="Dashboard">{page}</Layout>;
   };
   ```

---

## 4. UI & Styling

- **Tailwind CSS + shadcn/ui**: All UI components are styled using Tailwind utility classes on top of shadcn/ui components (which use Radix UI primitives).
- **Data Fetching States**: Any component fetching async data from the backend must follow the **loading, error, and success** structure. Design the loading skeleton to match the success component's height so there is no layout shift.
