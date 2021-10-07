import { axios } from '../lib';
import { store } from '../auth';

const refreshToken = async (cookie) => {
  const { token } = await axios.post('refresh-token', null, {
    headers: { cookie },
  });
  store.dispatch({ type: 'SET', jwt: token });

  return token;
};

export default refreshToken;
