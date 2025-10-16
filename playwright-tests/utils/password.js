const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const RUNTIME_FILE = path.resolve(
  process.cwd(),
  'playwright-tests/setup/.e2e-runtime.secrets.json'
);

function readRuntimeSecrets() {
  try {
    if (fs.existsSync(RUNTIME_FILE)) {
      const raw = fs.readFileSync(RUNTIME_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to read runtime secrets:', err);
  }
  return {};
}

function writeRuntimeSecrets(next) {
  const tmp = RUNTIME_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(next, null, 2), 'utf8');
  fs.renameSync(tmp, RUNTIME_FILE);
}

/**
 * Generează o parolă puternică (min 14 caractere, cu upper/lower/digit/symbol).
 */
function generateStrongPassword() {
  // 18 bytes ~ 24 chars base64, apoi ajustăm pentru complexitate
  const base = crypto.randomBytes(18).toString('base64').replace(/[+=]/g, '');
  // garantăm clasele
  const must = [
    'A',
    'Z', // upper
    'a',
    'z', // lower
    '0',
    '9', // digit
    '!',
    '@',
    '#',
    '$',
    '%',
    '&',
    '*',
  ];
  const mix = base + must.map(pick).join('');
  return shuffle(mix).slice(0, 16);

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function shuffle(str) {
    const a = str.split('');
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.join('');
  }
}

module.exports = {
  readRuntimeSecrets,
  writeRuntimeSecrets,
  generateStrongPassword,
};
