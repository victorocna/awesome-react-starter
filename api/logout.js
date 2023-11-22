import { store } from '@auth';
import { axios, router, toaster } from '@lib';

const logout = async () => {
  try {
    await axios.post('logout');
    store.dispatch({ type: 'REMOVE' });

    // notify user and other actions
    toaster.success('Logout successful');

    // redirect home
    router.push('/login');
  } catch (err) {
    toaster.error(err.message);
  }
};

export default logout;
