const toJSON = (any: unknown): unknown => {
  if (typeof any === 'object') {
    return any;
  }

  try {
    return JSON.parse(any as string);
  } catch {
    return null;
  }
};

export default toJSON;
