# Project Setup & Testing Guide

This document explains how to configure and run the project (both front-end and back-end) for local development and testing.

### ⚙️ 1. Install dependencies and set up environment files

```sh
npm ci
npm cp .env.example .env
```

### 🧾 2. Configure .env (Front-End)

In the front-end project folder, open the newly created .env file and make the following changes:

1. ➕ Add:

```sh
USER_EMAIL="[prenume].[nume]@chesscoders.com"
WORKERS="3"
```

2. ✏️ Modify:

```sh
APP_BASE_URL="http://localhost:3000"
```

### 🔑 3. Configure .env (Back-End)

In the back-end project folder, open .env and add your Postmark credentials:

```sh
POSTMARK_FROM="[email]"
POSTMARK_SECRET="[key]"
```

### 📁 4. Configure Gmail credentials

1.  Copy the .gmail-mcp folder (which contains gcp-oauth.keys.json) from MEGA (look up for a directory named Playwright).

2.  Move it to your user directory:

        a. Windows: C:\Users\[numeUser]\.gmail-mcp

        b. macOS: /Users/[numeUser]/.gmail-mcp

### ⚙️ 5. Update VS Code user settings

Open VS Code settings in JSON mode:

- Press Ctrl + Shift + P (or Cmd + Shift + P on macOS)

- Search for:

  > Preferences: Open User Settings (JSON)

- Then add the following configuration:

```js
"mcp": {
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "gmail": {
      "command": "npx",
      "args": ["@gongrzhe/server-gmail-autoauth-mcp"]
    }
  }
}
```

### 🔐 6. Authenticate Gmail MCP

In the front-end repository, run:

```sh
npm run mcp:auth
```

⚠️ Important: The front-end server must NOT be running during this step.

Sign in using your ChessCoders Google account specified in .env.
You should see a success message once authentication completes.

### 🧠 7. Verify Gmail MCP is running

Open your settings.json again and check the MCP Gmail status.
If it’s not marked as Running, press Start to activate it.

### 🚀 8. Start both servers

Run both the front-end and back-end servers locally.

### 🔑 9. Save a login account

Once both servers are running, execute:

```sh
npm run tests:auth
```

This will store a login account for test execution.

### 🧪 10. Run tests

- a. Run all tests (desktop + mobile — Chrome & Safari)

```sh
npm run tests
```

- b. Run desktop tests only

```sh
npm run tests:desktop
```

- c. Run mobile tests only (Chrome & Safari)

```sh
npm run tests:mobile
```

### 💡 Useful options

You can append the following flags for additional functionality:

    --ui	---> Opens the browser UI to view test steps and re-run tests interactive

    --headed	---> Runs tests in live browser mode instead of headless

Example:

```sh
npx playwright test playwright-tests/e2e/forgot-password.e2e.spec.ts --headed
```

Also available commands:

```sh
npm run tests:mobile:ui
npm run tests:mobile:headed
npm run tests:desktop:ui
npm run tests:desktop:headed
```
