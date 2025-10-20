import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const LOCK_DIR = path.resolve(ROOT, '.e2e-mail-lock');
const PID_FILE = path.join(LOCK_DIR, 'pid');
const META_FILE = path.join(LOCK_DIR, 'meta.json');

function pidAlive(pid) {
  try {
    // pe Win/Unix, kill(pid, 0) întoarce eroare dacă nu există procesul
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function tryCleanupStaleLock() {
  try {
    if (!fs.existsSync(LOCK_DIR)) return;
    let stale = false;

    // 1) dacă pid nu există → stale
    if (fs.existsSync(PID_FILE)) {
      const pidStr = fs.readFileSync(PID_FILE, 'utf8').trim();
      const pid = Number(pidStr);
      if (!Number.isFinite(pid) || !pidAlive(pid)) stale = true;
    } else {
      stale = true;
    }

    // 2) fallback pe vârstă (ex. >10 min)
    if (!stale) {
      const st = fs.statSync(LOCK_DIR);
      const ageMs = Date.now() - st.ctimeMs;
      if (ageMs > 10 * 60_000) stale = true; // 10 minute
    }

    if (stale) {
      // încearcă să ștergi lockul stale
      try {
        fs.rmSync(LOCK_DIR, { recursive: true, force: true });
      } catch {}
    }
  } catch {
    /* ignore */
  }
}

export async function acquireEmailLock(opts) {
  const retryMs = opts?.retryMs ?? 500;
  const envTimeout = Number(process.env.E2E_MAIL_LOCK_TIMEOUT_MS);
  const timeoutMs = opts?.timeoutMs ?? (Number.isFinite(envTimeout) ? envTimeout : 5 * 60_000);

  const deadline = Date.now() + timeoutMs;

  for (;;) {
    tryCleanupStaleLock();

    try {
      fs.mkdirSync(LOCK_DIR); // atomic
      // lock obținut → scrie PID și meta
      fs.writeFileSync(PID_FILE, String(process.pid), 'utf8');
      fs.writeFileSync(
        META_FILE,
        JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }, null, 2),
        'utf8'
      );
      return;
    } catch (err) {
      if (err?.code === 'EEXIST' || err?.code === 'EACCES') {
        if (Date.now() > deadline) {
          throw new Error(`Timeout acquiring email mutex after ${timeoutMs}ms`);
        }
        await new Promise((r) => setTimeout(r, retryMs));
        continue;
      }
      throw err;
    }
  }
}

export function releaseEmailLock() {
  try {
    fs.rmSync(LOCK_DIR, { recursive: true, force: true });
  } catch {}
}
