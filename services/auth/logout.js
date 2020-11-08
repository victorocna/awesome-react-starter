import fetch from './fetch';
import store from './store';

const logout = async () => {
  const { message } = await fetch(`/logout`, {
    method: 'POST',
  });
  store.dispatch({ type: 'REMOVE' });

  return message;
};

export default logout;
