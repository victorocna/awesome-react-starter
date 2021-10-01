import { axios, toaster } from '../lib';

const forgot = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await axios.post('forgot', data);

    // notify user and other actions
    toaster.success('You will receive an email with reset instructions');
  } catch (err) {
    // ambiguous success message for failed attempts
    toaster.success('You will receive an email with reset instructions');

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default forgot;
