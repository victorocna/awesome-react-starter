import jwt from 'jsonwebtoken';
import isTokenExpired from './is-token-expired';
import refreshUser from './refresh-user';
import store from './store';
import refreshToken from '../api/refresh-token';

const ensureUser = async (cookie) => {
  const inMemoryToken = store.getState();
  const decoded = jwt.decode(inMemoryToken);

  if (!decoded || isTokenExpired(decoded)) {
    const token = await refreshToken(cookie);
    return refreshUser(token);
  }

  return inMemoryToken;
};

export default ensureUser;
