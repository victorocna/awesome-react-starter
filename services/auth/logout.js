import fetch from '../api/fetch';
import store from './store';

const logout = async () => {
  const { message } = await fetch(`/logout`, {
    withAuth: true,
    credentials: 'include',
    method: 'POST',
  });
  store.dispatch({ type: 'REMOVE' });

  return message;
};

export default logout;
