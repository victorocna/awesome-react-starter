import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

function credentialsPath() {
  return process.platform === 'win32'
    ? `${process.env.USERPROFILE}\\.gmail-mcp\\credentials.json`
    : `${process.env.HOME}/.gmail-mcp/credentials.json`;
}

async function withGmailMCP(run) {
  const transport = new StdioClientTransport({
    command: 'npx',
    args: ['-y', '@gongrzhe/server-gmail-autoauth-mcp'],
    env: { ...process.env, GMAIL_CREDENTIALS_PATH: credentialsPath() },
  });
  const client = new Client({ name: 'playwright-tests', version: '1.0.0' });
  await client.connect(transport);
  try {
    return await run(client);
  } finally {
    await client.close();
    if (typeof transport.close === 'function') await transport.close();
  }
}

/* ---------- low-level parsing helpers ---------- */
function jsonChunk(res) {
  return res?.content?.find((c) => c.type === 'json')?.data;
}
function textJoined(res) {
  return (res?.content || [])
    .filter((c) => c.type === 'text' && typeof c.text === 'string')
    .map((c) => c.text)
    .join('\n');
}
function extractFirstMessageIdFromSearch(res) {
  const j = jsonChunk(res);
  if (Array.isArray(j) && j[0]?.id) return j[0].id;
  const t = textJoined(res) || '';
  let m = t.match(/^\s*ID:\s*([A-Za-z0-9_-]+)\s*$/m) || t.match(/"id"\s*:\s*"([^"]+)"/);
  return m ? m[1] : null;
}
function extractEmailBodyFromRead(res) {
  const j = jsonChunk(res);
  if (j && typeof j === 'object') {
    const html = j.htmlBody || j.html || '';
    const txt = j.textBody || j.text || '';
    return html || txt || '';
  }
  return textJoined(res) || '';
}

function extractReceivedMsFromRead(res) {
  const j = jsonChunk(res);
  if (j && typeof j === 'object') {
    if (typeof j.internalDate === 'string' && /^\d+$/.test(j.internalDate)) {
      return Number(j.internalDate);
    }
    if (typeof j.internalDate === 'number') return j.internalDate;
    if (typeof j.receivedMs === 'number') return j.receivedMs;

    // încearcă headerul Date
    const hdrDate =
      j.headers?.Date ||
      j.headers?.date ||
      j.payload?.headers?.find?.((h) => /^(date)$/i.test(h.name))?.value;
    const parsed = hdrDate ? Date.parse(hdrDate) : NaN;
    if (!Number.isNaN(parsed)) return parsed;
  }
  const t = textJoined(res) || '';
  const m = t.match(/^\s*Date:\s*(.+)$/im);
  if (m?.[1]) {
    const parsed = Date.parse(m[1]);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
// Escapes user-supplied text for safe insertion into a RegExp
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extracts the first link that contains the given path segment.
 * @param body Email/HTML body (will be HTML-decoded before matching)
 * @param segment Path segment to look for (e.g. "reset", "verify", "auth/reset")
 * @param baseUrl Base URL used to resolve relative links. Defaults to http://localhost:3000
 */
export function extractLinkBySegment(
  body = '',
  segment = 'reset',
  baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000'
) {
  const decoded = decodeEntities(body);

  // Build a safe regex fragment for the provided segment.
  // We match ".../<segment>..." anywhere in the URL or href.
  const segEsc = escapeRegExp(segment.replace(/^\/+/, '')); // strip leading slash for consistency
  const segFragment = `/${segEsc}`;

  // 1) <a ... href="..."> with double quotes
  let m =
    decoded.match(new RegExp(`<a\\b[^>]*\\bhref\\s*=\\s*"([^"]*${segFragment}[^"]*)"`, 'i')) ||
    // 2) <a ... href='...'> with single quotes
    decoded.match(new RegExp(`<a\\b[^>]*\\bhref\\s*=\\s*'([^']*${segFragment}[^']*)'`, 'i'));

  if (m?.[1]) return m[1];

  // 3) Plain absolute URL in the text
  m = decoded.match(new RegExp(`https?:\\/\\/[^\\s<>"']*${segFragment}[^\\s<>"']*`, 'i'));
  if (m?.[0]) return m[0];

  // 4) Relative URL (e.g., /reset?token=..., /auth/reset/abc)
  m = decoded.match(new RegExp(`(?:href\\s*=\\s*["'])?((${segFragment}[^\\s"'>]*)`, 'i'));
  if (m?.[1]) return `${baseUrl}${m[1]}`;

  return null;
}

/* ---------- Gmail MCP actions ---------- */
async function searchNewestMessageId(query) {
  return withGmailMCP(async (client) => {
    const res = await client.callTool({
      name: 'search_emails',
      arguments: { query, maxResults: 1 },
    });
    return extractFirstMessageIdFromSearch(res);
  });
}

async function readEmail(messageId) {
  return withGmailMCP(async (client) => {
    return client.callTool({ name: 'read_email', arguments: { messageId } });
  });
}

async function readEmailBody(messageId) {
  const res = await readEmail(messageId);
  return extractEmailBodyFromRead(res);
}

/* ---------- Public API ---------- */
/** Builds a good Gmail query covering Spam/Trash as well */
function buildQuery({ to, from, subject, newerThan }) {
  const after = newerThan ? newerThan.replace(/-/g, '/') : null;
  const parts = [
    'in:anywhere',
    from && `from:${from}`,
    to && `to:${to}`,
    subject
      ? `subject:"${String(subject).replace(/"/g, '\\"')}"`
      : 'subject:(reset OR "password reset")',
    after && `after:${after}`,
  ];
  return parts.filter(Boolean).join(' ');
}

/** Capture the current newest reset message ID (baseline). Run BEFORE clicking Send. */
export async function captureLatestResetMessageId(filters) {
  const q = buildQuery(filters || {});
  return await searchNewestMessageId(q);
}

/**
 * After clicking Send, poll for a NEWER message than baseline.
 * Returns the reset link once the new email arrives and is parsed.
 */

export async function waitForLatestResetLinkSinceNow(
  filters,
  { timeoutMs = 90_000, pollMs = 3_000 } = {}
) {
  const q = buildQuery(filters || {});
  const sinceMs = Date.now();
  const deadline = sinceMs + timeoutMs;

  while (Date.now() < deadline) {
    const id = await searchNewestMessageId(q);
    if (id) {
      const readRes = await readEmail(id);
      const receivedMs = extractReceivedMsFromRead(readRes);
      if (receivedMs && receivedMs > sinceMs - 5000) {
        const body = extractEmailBodyFromRead(readRes);
        // const link = extractResetLink(body);
        const segment = filters?.segment || 'reset';
        const link = extractLinkBySegment(body, segment);
        if (link) return link;
        // dacă nu s-a putut extrage încă linkul, continuăm să poll-uim
      }
    }
    await new Promise((r) => setTimeout(r, pollMs));
  }

  throw new Error(`Timed out waiting for reset email newer than now (>${timeoutMs}ms).`);
}
