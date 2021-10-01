import router from 'next/router';
import { toaster } from '../functions';
import { axios } from '../services/api';

const signup = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await axios.post('signup', data);

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
