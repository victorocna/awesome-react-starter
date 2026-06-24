/**
 * Normalizes input objects by filtering empty values, sorting keys, and
 * automatically serializing TanStack Table states (sorting, columnFilters)
 * into clean, backend-ready query parameters.
 *
 * @param input The raw input query parameters or form values.
 * @returns An object containing the normalized parameters and a unique cache key.
 */
const normalize = (input: unknown): { norm: unknown; key: string } => {
  let processedInput = input;

  if (input && typeof input === 'object' && !Array.isArray(input)) {
    const obj = input as Record<string, any>;
    const { sorting, columnFilters, ...rest } = obj;
    const newObj: Record<string, any> = { ...rest };

    if (Array.isArray(sorting)) {
      if (sorting.length > 0) {
        newObj.sort = sorting
          .map((s) => {
            return `${s.desc ? '-' : ''}${s.id}`;
          })
          .join(',');
      }
    }

    if (Array.isArray(columnFilters)) {
      columnFilters.forEach((filter) => {
        if (filter && typeof filter === 'object' && 'id' in filter && 'value' in filter) {
          if (filter.value !== undefined && filter.value !== '') {
            newObj[filter.id] = filter.value;
          }
        }
      });
    }
    processedInput = newObj;
  }

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

  const [norm, key] = walk(processedInput);
  return {
    norm: norm === undefined ? {} : norm,
    key: key || '{}',
  };
};

export default normalize;
