import { axios, router, toaster } from '../lib';
import { store } from '../auth';

const logout = async () => {
  try {
    await axios.post('logout');
    store.dispatch({ type: 'REMOVE' });

    // notify user and other actions
    toaster.success('Logout successful');

    // redirect home
    router.push('/login');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export default logout;
