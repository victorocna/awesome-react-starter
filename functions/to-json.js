const toJSON = (any) => {
  if (typeof any === 'object') {
    return any;
  }

  try {
    return JSON.parse(any);
  } catch {
    return null;
  }
};

export default toJSON;
