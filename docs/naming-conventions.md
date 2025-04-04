# Naming conventions

## Files and folders

- `api` any back-end requests, grouped by subject
- `auth` common authentication logic
- `components` any React components, grouped by subject
- `constants` any constant variables: months, countries, cities, etc.
- `css` any custom CSS
- `data` any project related data: table columns, etc.
- `docs` any project documentation
- `functions` any pure function that abstract a small part of the project
- `hooks` any React custom hooks
- `languages` any translations into other languages as a json file
- `lib` any project library with custom configuration
- `models` any project model used in forms
- `pages` any page that can be accessed from the browser
- `public` any public resource: images, icons, documents, etc
- `headers.js` security headers used by the application
- `site.config.js` the project configuration

## Components with async data

- Every component that fetches data from the back-end should have **loading**, **error** and **success** components
- Success component should contain the data fetched from the back-end
- Loading component should contain a skeleton design of the success component
- Error component should be similar with the loading component and must also show an error message as a toaster
- Whenever possible, the height of the user interface SHOULD NOT change between loading, error and success components

## Naming conventions

- `TodoList.jsx` for the component that fetches data using `useInfiniteQuery` or `useQuery` and displays data as a list
- `TodoTable.jsx` for the component that fetches data using `useInfiniteQuery` or `useQuery` and displays data as a table
- `TodoTableSuccess.jsx` for the success component
- `TodoTableLoading.jsx` for the loading component
- `TodoTableError.jsx` for the error component
- `AddTodoForm.jsx` for forms that add new data
- `EditTodoForm.jsx` for forms that edit existing data
