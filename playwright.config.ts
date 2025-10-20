import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const GREP_INVERT_NON_MAIL_UI = /@mail|\.ui\.spec/;

export default defineConfig({
  testDir: './playwright-tests',
  projects: [
    // 1) Setup
    {
      name: 'setup:auth',
      testMatch: /auth\.setup\.ts/,
      workers: 1,
      retries: 0,
    },

    // ---------- DESKTOP (without @mail) ----------
    {
      name: 'desktop:e2e (auth)',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
        storageState: 'playwright-tests/setup/user.json',
      },
      dependencies: ['setup:auth'],
      testMatch: /.*\.spec\.ts/,
      grepInvert: GREP_INVERT_NON_MAIL_UI,
    },
    {
      name: 'desktop:ui (no auth)',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
      },
      testMatch: /.*\.ui\.spec\.ts/,
    },

    // ---------- MOBILE (without @mail) ----------
    {
      name: 'mobile:chrome:e2e (auth)',
      use: {
        ...devices['Pixel 7'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
        storageState: 'playwright-tests/setup/user.json',
      },
      dependencies: ['setup:auth'],
      testMatch: /.*\.spec\.ts/,
      grepInvert: GREP_INVERT_NON_MAIL_UI,
    },
    {
      name: 'mobile:safari:e2e (auth)',
      use: {
        ...devices['iPhone 14'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
        storageState: 'playwright-tests/setup/user.json',
      },
      dependencies: ['setup:auth'],
      testMatch: /.*\.spec\.ts/,
      grepInvert: GREP_INVERT_NON_MAIL_UI,
    },
    {
      name: 'mobile:chrome:ui (no auth)',
      use: { ...devices['Pixel 7'], baseURL: process.env.APP_BASE_URL || 'http://localhost:3000' },
      testMatch: /.*\.ui\.spec\.ts/,
    },
    {
      name: 'mobile:safari:ui (no auth)',
      use: {
        ...devices['iPhone 14'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
      },
      testMatch: /.*\.ui\.spec\.ts/,
    },

    // ---------- EMAIL PROJECTS (just @mail) ----------
    {
      name: 'desktop:email',
      grep: /@mail/,
      fullyParallel: false,
      workers: 1,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
      },
    },
    {
      name: 'mobile:chrome:email',
      grep: /@mail/,
      fullyParallel: false,
      workers: 1,
      use: { ...devices['Pixel 7'], baseURL: process.env.APP_BASE_URL || 'http://localhost:3000' },
    },
    {
      name: 'mobile:safari:email',
      grep: /@mail/,
      fullyParallel: false,
      workers: 1,
      use: {
        ...devices['iPhone 14'],
        baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
      },
    },
  ],
  use: {
    baseURL: process.env.APP_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  expect: { timeout: 10_000 },
  workers: process.env.WORKERS ? Number(process.env.WORKERS) : undefined,
});
