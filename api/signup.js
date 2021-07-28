import router from 'next/router';
import { toaster } from '../functions';
import { fetch } from '../services/api';

const signup = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await fetch(`signup`, { data, withAuth: false, method: 'POST' });

    // notify user and other actions
    toaster.success('Your account has been created');
    router.push('/thank-you');
  } catch ({ message }) {
    toaster.error(message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default signup;
