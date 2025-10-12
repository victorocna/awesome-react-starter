import { test, expect, request } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { readRuntimeSecrets, generateStrongPassword } from 'playwright-tests/utils/password';

const APP = process.env.APP_BASE_URL!;
const API = process.env.API_BASE_URL || APP;
const EMAIL = process.env.USER_EMAIL!;
const STORAGE_PATH = path.resolve('playwright-tests/setup/user.json');

const RECAPTCHA = process.env.E2E_RECAPTCHA_TOKEN || 'e2e-test-token';
const TOKEN_STORAGE_KEY = process.env.TOKEN_STORAGE_KEY || 'token';
const USER_NAME = process.env.USER_NAME || 'E2E Test User';

function getPasswordOrGenerate() {
  try {
    const secrets = readRuntimeSecrets?.();
    if (secrets?.currentPassword && typeof secrets.currentPassword === 'string') {
      return secrets.currentPassword;
    }
  } catch {
    /* ignore */
  }
  return generateStrongPassword();
}

test('authenticate via API (create if missing) and save storage', async ({ page }) => {
  const password = getPasswordOrGenerate();

  // 1) Context API
  const api = await request.newContext({
    baseURL: API,
    extraHTTPHeaders: { 'Content-Type': 'application/json' },
  });

  // 2) Signup idempotent
  const signupRes = await api.post('/signup', {
    data: {
      name: USER_NAME,
      email: EMAIL,
      confirmed: true,
      password,
      'g-recaptcha-response': RECAPTCHA,
    },
    failOnStatusCode: false,
  });

  const okSignup = [200, 201, 409].includes(signupRes.status());
  if (!okSignup) {
    const body = await safeJson(signupRes);
    throw new Error(`[signup] ${signupRes.status()} ${JSON.stringify(body)}`);
  }

  // 3) Login (aici serverul îți poate seta refresh-token în cookie ȘI/SAU returna token JSON)
  const loginRes = await api.post('/login', {
    data: {
      email: EMAIL,
      password,
      'g-recaptcha-response': RECAPTCHA,
    },
    failOnStatusCode: false,
  });
  if (loginRes.status() !== 200) {
    const body = await safeJson(loginRes);
    throw new Error(`[login] ${loginRes.status()} ${JSON.stringify(body)}`);
  }

  // Încearcă să citești token-ul JSON (dacă există)
  let token: string | null = null;
  try {
    const json = (await loginRes.json()) as { token?: string };
    token = json?.token ?? null;
  } catch {
    /* serverul poate să nu trimită JSON */
  }

  // 4) Copiază cookie-urile (inclusiv jwt-refresh-token-*) din contextul API în browser context
  const apiState = await api.storageState();
  if (apiState?.cookies?.length) {
    await page.context().addCookies(
      apiState.cookies.map((c) => ({
        name: c.name,
        value: c.value,
        domain: c.domain,
        path: c.path,
        expires: c.expires,
        httpOnly: c.httpOnly,
        secure: c.secure,
        sameSite: c.sameSite, // 'Lax' | 'None' | 'Strict'
      }))
    );
  }

  // 5) (Opțional) Dacă app-ul mai citește și un access token din localStorage, îl setăm la init.
  if (token) {
    page.context().addInitScript(
      ([key, value]) => {
        try {
          window.localStorage.setItem(key, value);
        } catch {}
      },
      [TOKEN_STORAGE_KEY, token] as const
    );
  }

  // 6) Deschide aplicația – dacă refresh cookie-ul e valid, ar trebui să fii logat
  await page.goto(APP);

  // 7) Salvează storage pentru proiectele E2E
  ensureDir(path.dirname(STORAGE_PATH));
  await page.context().storageState({ path: STORAGE_PATH });
  test.info().annotations.push({ type: 'info', description: `Saved storage to ${STORAGE_PATH}` });
});

// ---------- helpers ----------
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function safeJson(res: { json(): Promise<unknown>; text(): Promise<string> }) {
  try {
    return await res.json();
  } catch {
    return await res.text();
  }
}
