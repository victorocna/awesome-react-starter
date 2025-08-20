const normalize = (input) => {
  const walk = (v) => {
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
      const out = [];
      const parts = [];
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
      const keys = Object.keys(v).sort();
      const out = {};
      const parts = [];
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const [nv, ks] = walk(v[k]);
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
