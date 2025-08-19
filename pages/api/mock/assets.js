import { ASSETS } from 'mock/data/assets';

function safeParseInt(v, fallback) {
  if (v == null) {
    return fallback;
  }
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) {
    return fallback;
  }
  return n;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { limit: limitParam, search: q } = req.query;
  const limit = safeParseInt(Array.isArray(limitParam) ? limitParam[0] : limitParam, 30);

  let data = ASSETS.slice();

  if (q != null && String(q).trim() !== '') {
    const needle = String(q).trim().toLowerCase();
    data = data.filter((a) => {
      if (a.name.toLowerCase().includes(needle)) {
        return true;
      }
      if (a.symbol.toLowerCase().includes(needle)) {
        return true;
      }
      if (a.id.toLowerCase().includes(needle)) {
        return true;
      }
      return false;
    });
  }

  return res.status(200).json(data.slice(0, limit));
}
