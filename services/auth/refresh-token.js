import fetch from '../api/fetch';
import store from './store'

const refreshToken = async (cookie) => {
  const { token } = await fetch(`/refresh-token`, {
    withAuth: true,
    method: 'POST',
    credentials: 'include',
    headers: { cookie },
  });
  store.dispatch({ type: 'SET', jwt: token });

  return token;
};

export default refreshToken;
