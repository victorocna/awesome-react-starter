const normalize = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(normalize);
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const k of Object.keys(obj).sort()) {
      const v = obj[k];
      if (v !== undefined) {
        out[k] = normalize(v);
      }
    }
    return out;
  }
  return obj;
};

export default normalize;
