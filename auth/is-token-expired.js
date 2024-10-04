/**
 * Checks the expiration date of a JWT token.
 *
 * @param {{ exp: number }} param The decoded JWT token
 * @returns {boolean} Whether the token is expired
 */
const isTokenExpired = ({ exp }) => {
  return exp < Date.now() / 1000;
};

export default isTokenExpired;
