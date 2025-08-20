import { extractError } from '@functions';
import { axios, toaster } from '@lib';

const reset = async (ref, hash, data) => {
  try {
    // Execute google reCAPTCHA
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // Execute main action
    await axios.post(`reset/${hash}`, data);

    // Notify user and other actions
    toaster.success('Your password has been changed');
  } catch (err) {
    const { message } = extractError(err);
    if (message) {
      toaster.error(message);
    }

    // Reset google reCAPTCHA on invalid login
    ref.current.reset();
  }
};

export default reset;
