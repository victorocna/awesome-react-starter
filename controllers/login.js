import router from 'next/router';
import { toaster } from '../functions';
import { login as loginAuth } from '../services/auth';

const login = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    const message = await loginAuth(data);

    // notify user and other actions
    toaster.success(message);
    router.push('/dashboard');
  } catch ({ message }) {
    toaster.error(message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default login;
