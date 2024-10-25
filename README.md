# Awesome React and Next.js project starter

Starter template for React and Next.js projects packed with features like authentication, custom hooks, Tailwind support and many more.

## Documentation and wiki

Make sure to read our [extensive documentation](https://github.com/victorocna/awesome-react-starter/wiki) about using this starter template.

## Quick start

Install dependencies

```bash
npm ci
```

Copy the example environment variables and update them if needed

```bash
cp .env.example .env
```

Start the local server

```bash
npm run dev
```

## Features

### Authorization with JWT

The authorization process is inspired [by these best practices of using JWT from Hasura.io](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/)

### Security headers

These HTTP response headers increase the security of the app and are bundled by default.
Review and update the security headers in the `headers.js` file and analyse your app [using this tool](https://securityheaders.com).

### Form components

- simple input components: text input, email input, number input, phone input, password input
- simple form components: checkbox, radio buttons, textarea, fieldset
- complex input components: debounced async search, file upload
- dropdown form components: classic select, custom dropdown, combobox, async dropdown, async combobox, async multi select
- for components for dates: date picker, time picker, date of birth
- other form components: reCAPTCHA, quantity selector (plus/minus)

### Other components

- table components compatible with `react-table` package
- data formatting components for showing dates, time, percentages, prices, plural
- modal components and others compatible with `react-bootstrap` package
- meta components: favicon, open graph, app head
- layout components: layout, menu, context menu, bone, error boundary, error fallback
- icon components: spinner, loading
- basic components: link, button, pill
- other components: toaster, translate
