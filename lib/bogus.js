import { local } from 'store2';

export const add = (key) => {
  const value = local.get(key);
  if (value === null || value === undefined) {
    return false;
  }

  local.set(key, value + 1);
  return true;
};

export const subtract = (key) => {
  const value = local.get(key);
  if (value === null || value === undefined) {
    return false;
  }

  local.set(key, value - 1);
  return true;
};

export const make = (key, max = 10, min = 3) => {
  let count = local.get(key);
  if (count === null || count === undefined) {
    count = min;
  }
  if (count > max) {
    count = max;
  }
  if (count === 0) {
    count = 1;
  }

  const consecutiveNumbers = (e, i) => i;
  return Array.from({ length: count }, consecutiveNumbers);
};

const bogus = {
  add,
  subtract,
  make,
};

export default bogus;
