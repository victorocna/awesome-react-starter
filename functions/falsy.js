/**
 * Tests whether all arguments are not falsy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
const falsy = (...args) => {
  return !args.every((arg) => {
    if (!arg || arg === 'undefined' || (Array.isArray(arg) && arg.length === 0)) {
      return false;
    }
    return true;
  });
};

export default falsy;
