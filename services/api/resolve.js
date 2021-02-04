/**
 * Resolves the URL path
 */
const resolve = (url) => {
  if (~url.indexOf('http')) {
    return url;
  }

  const parts = [process.env.API_BASE_URL];
  const firstCharacter = url[0];
  if (firstCharacter !== '/') {
    parts.push('/');
  }
  parts.push(url);

  return parts.join('');
};

export default resolve;
