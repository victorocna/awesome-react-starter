import { store } from '@auth';
import { axios } from '@lib';
import { decode } from 'jsonwebtoken';

/**
 * This function handles the token refresh process by making a POST request to the 'refresh-token' endpoint.
 * Since the Next.js server cannot access the client-side React Redux store, we rely on this server-side mechanism
 * to obtain a refreshed token based on the incoming request headers. The refreshed token is then stored
 * using a server-side method, acknowledging the separation between client and server execution environments.
 *
 * @param {string} headers The request headers
 * @returns {Promise<string>} The refreshed token
 */
const refreshToken = async (headers) => {
  const { token } = await axios.post('refresh-token', null, { headers });

  // Store the refreshed token only if the response is valid
  if (decode(token)) {
    store.dispatch({ type: 'SET', jwt: token });
  }

  return token;
};

export default refreshToken;
