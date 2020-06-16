/**
 * Resolves the URL path
 *
 * @param {*} url an URL string, relative or absolute
 */
const resolve = (url) => {
  if (url.indexOf('http')) {
    return `${process.env.API_BASE_URL}/${url}`;
  }

  return url;
};

export default resolve;
