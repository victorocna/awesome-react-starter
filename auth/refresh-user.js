import jwt from 'jsonwebtoken';
import isTokenExpired from './is-token-expired';

const refreshUser = (token) => {
  const decoded = jwt.decode(token);
  if (!decoded || isTokenExpired(decoded)) {
    throw new Error('Error! Unauthorized');
  }

  return token;
};

export default refreshUser;
