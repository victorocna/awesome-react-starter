import { store } from '@auth';
import { extractError } from '@functions';
import { axios, router, toaster } from '@lib';

const logout = async () => {
  try {
    await axios.post('logout');
    store.dispatch({ type: 'REMOVE' });

    // Notify user and other actions
    toaster.success('Logout successful');

    // Redirect home
    router.push('/login');
  } catch (err) {
    const { message } = extractError(err);
    if (message) {
      toaster.error(message);
    }
  }
};

export default logout;
