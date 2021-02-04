import nodeFetch from 'node-fetch';
import resolve from './resolve';
import store from '../auth/store';

/**
 * Wraps node-fetch with common project-wide options
 *
 * @param {*} url Relative or absolute URL
 * @param {*} options Common options
 * @see https://www.npmjs.com/package/node-fetch#options
 */
const fetch = async (url, { data, withAuth = false, method = 'GET', ...options } = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (withAuth) {
    headers.Authorization = `Bearer ${store.getState()}`;
    options.credentials = 'include';
  }

  const res = await nodeFetch(resolve(url), {
    headers,
    method,
    body: data ? JSON.stringify(data) : null,
    ...options,
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }
  return await res.json();
};

export default fetch;
