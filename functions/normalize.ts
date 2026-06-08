const normalize = (input: unknown): { norm: unknown; key: string } => {
  const walk = (v: unknown): [unknown, string | undefined] => {
    if (v == null) {
      return [undefined, undefined];
    }
    if (typeof v === 'string') {
      if (v === '') {
        return [undefined, undefined];
      }
      const s = v;
      return [s, JSON.stringify(s)];
    }
    if (typeof v === 'number' || typeof v === 'boolean') {
      return [v, JSON.stringify(v)];
    }
    if (typeof v === 'bigint') {
      const s = v.toString();
      return [s, JSON.stringify(s)];
    }
    if (v instanceof Date) {
      const iso = v.toISOString();
      return [iso, JSON.stringify(iso)];
    }
    if (Array.isArray(v)) {
      const out: unknown[] = [];
      const parts: (string | undefined)[] = [];
      for (let i = 0; i < v.length; i++) {
        const [nv, ks] = walk(v[i]);
        if (nv !== undefined) {
          out.push(nv);
          parts.push(ks);
        }
      }
      return [out, `[${parts.join(',')}]`];
    }
    if (typeof v === 'object') {
      const obj = v as Record<string, unknown>;
      const keys = Object.keys(obj).sort();
      const out: Record<string, unknown> = {};
      const parts: string[] = [];
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const [nv, ks] = walk(obj[k]);
        if (nv !== undefined) {
          out[k] = nv;
          parts.push(`${JSON.stringify(k)}:${ks}`);
        }
      }
      return [out, `{${parts.join(',')}}`];
    }
    return [undefined, undefined];
  };

  const [norm, key] = walk(input);
  return {
    norm: norm === undefined ? {} : norm,
    key: key || '{}',
  };
};

export default normalize;
