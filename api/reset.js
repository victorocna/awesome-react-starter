import { toaster } from '../functions';
import { axios } from '../services/api';

const reset = async (ref, hash, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await axios.post(`reset/${hash}`, data);

    // notify user and other actions
    toaster.success('Your password has been changed');
  } catch ({ message }) {
    toaster.error(message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default reset;
