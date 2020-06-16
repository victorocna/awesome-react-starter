import fetch from 'node-fetch';
import cookie from 'js-cookie';
import resolve from './resolve';

/**
 * Wraps node-fetch with common project-wide options
 *
 * @param {*} url Relative or absolute URL
 * @param {*} options Common options
 * @see https://www.npmjs.com/package/node-fetch#options
 */
const wrapFetch = async (url, { data, withAuth = true, method = 'GET', ...options } = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (withAuth) {
    headers.Authorization = `Bearer ${cookie.get(process.env.COOKIE_NAME)}`;
  }

  const res = await fetch(resolve(url), {
    headers,
    method,
    body: data ? JSON.stringify(data) : null,
    ...options,
  });

  if (!res.ok) {
    const { name, message } = await res.json();
    throw new Error(`${name}! ${message}`);
  }
  return await res.json();
};

export default wrapFetch;
