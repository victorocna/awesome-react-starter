import router from 'next/router';
import { toaster } from '../functions';
import { logout as logoutAuth } from '../services/auth';

const logout = async () => {
  try {
    const message = await logoutAuth();

    // notify user and other actions
    toaster.success(message);
    router.push('/login');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export default logout;
