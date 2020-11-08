import fetch from './fetch';
import store from './store';

const login = async (data) => {
  const { message, token } = await fetch(`/login`, {
    data,
    withAuth: false,
    method: 'POST',
  });
  store.dispatch({ type: 'SET', jwt: token });

  return message;
};

export default login;
