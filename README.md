# Next with auth starter

Starter for Next.js projects with authentication

## Quick start

Install dependencies

```bash
npm install
```

Copy the example environment variables and update them if needed

```bash
cp .env.example .env
```

Start the local server

```bash
npm run dev
```

## Authorization with JWT

The authorization process is inspired [by these best practices of using JWT from Hasura.io](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/)

## Data components

The structure of components with data from an external source

### Top level component

With this component you will fetch data and determine the **status** of the request.
The status can be any one of these: **loading**, **error** or **success**.

This component will be responsible for switching between the following components based on the status.

### Error component

Displays an error message to the user, notifying him that something went wrong.
Usually with **red** text, background or border 😀

### Success component

Displays the data from the request to the user. The data is passed from the top component as props.
This also helps you build a faster static version of your app by helping you to mock real data.

### Loading component

Usually has the same layout as the success component.
Instead of data from the request it displays a skeleton screen which is a better user experience.

## Recaptcha

Recaptcha is used for non-authenticated pages in your app, where non-human users can interact with forms from your app.

### Usage with Formik

Formik is used throughout this app for form handling.
Use a Recaptcha field in any of your **public forms** just by including this snippet:

```js
<Field type="hidden" value="g-recaptcha-response" as={Recaptcha} />
```

Replace the value with any key accepted by your API.

## Loggers

Coming soon
