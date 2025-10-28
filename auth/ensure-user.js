import { refreshToken } from '@api';
import jwt from 'jsonwebtoken';
import isTokenExpired from './is-token-expired';
import store from './store';

const ensureUser = async () => {
  const accessToken = store.getState();
  if (accessToken && !isTokenExpired(jwt.decode(accessToken))) {
    return accessToken;
  }

  try {
    return await refreshToken();
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
};

export default ensureUser;
