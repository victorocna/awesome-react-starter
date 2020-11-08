/**
 * Resolves the URL path
 */
const resolve = (url) => {
  if (url.indexOf('http')) {
    const parts = [process.env.API_BASE_URL];
    if (url[0] !== '/') {
      parts.push('/');
    }
    parts.push(url);

    return parts.join('');
  }

  return url;
};

export default resolve;
