import { store } from '@auth';
import { axios } from '@lib';
import { decode } from 'jsonwebtoken';

const refreshToken = async (cookie) => {
  const { token } = await axios.post('refresh-token', null, {
    headers: { cookie },
  });

  // store the refreshed token only if the response is valid
  if (decode(token)) {
    store.dispatch({ type: 'SET', jwt: token });
  }

  return token;
};

export default refreshToken;
