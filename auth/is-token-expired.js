/**
 * Checks the expiration date of a JWT
 */
const isTokenExpired = ({ exp }) => {
  return exp < Date.now() / 1000;
};

export default isTokenExpired;
