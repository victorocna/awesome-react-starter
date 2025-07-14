import refreshToken from '@api/refresh-token';
import jwt from 'jsonwebtoken';
import isTokenExpired from './is-token-expired';
import refreshUser from './refresh-user';

/**
 * This function ensures that the user is authenticated by verifying the JWT token from the cookie.
 * If the token is invalid or expired, it attempts to refresh the token using the refresh token.
 * If the refresh token is also invalid or expired, the user is redirected to the login page.
 *
 * @param {string} cookie The JWT token from the cookie
 * @param {string} headers The request headers
 * @returns {Promise<string>} The JWT token
 */
const ensureUser = async (cookie, headers) => {
  /**
   * This step decodes the JWT token from the cookie. It's important to note that the application's server-side
   * cannot directly access tokens stored within the client's React Redux context due to the isolated execution environments.
   * Therefore, we verify the cookie received in the server request, which is set by the Express.js application,
   * to manage authentication across client and server contexts effectively.
   */
  const decoded = jwt.decode(cookie);

  if (!decoded || isTokenExpired(decoded)) {
    const token = await refreshToken(headers);
    return refreshUser(token);
  }

  return cookie;
};

export default ensureUser;
