import { extractError } from '@functions';
import { axios, router, toaster } from '@lib';

const signup = async (ref, data) => {
  try {
    // Execute google reCAPTCHA
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // Execute main action
    await axios.post('signup', data);

    // Notify user and other actions
    toaster.success('Your account has been created');
    router.push('/thank-you');
  } catch (err) {
    const { message } = extractError(err);
    if (message) {
      toaster.error(message);
    }

    // Reset google reCAPTCHA on invalid login
    ref.current.reset();
  }
};

export default signup;
