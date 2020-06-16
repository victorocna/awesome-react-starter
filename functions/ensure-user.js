import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';

const ensureUser = () => {
  const isTokenExpired = ({ exp }) => {
    return exp < Date.now() / 1000;
  };

  const token = cookie.get(process.env.COOKIE_NAME);
  const decoded = jwt.decode(token);

  if (!decoded || isTokenExpired(decoded)) {
    throw new Error('Error! Unauthorized');
  }

  return true;
};

export default ensureUser;
