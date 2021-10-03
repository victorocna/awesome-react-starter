# Awesome React starter

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
