import { toaster } from '../functions';
import { fetch } from '../services/api';

const forgot = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await fetch(`forgot`, { data, withAuth: false, method: 'POST' });

    // notify user and other actions
    toaster.success('You will receive an email with reset instructions');
  } catch ({ message }) {
    toaster.error(message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default forgot;
