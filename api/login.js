import { store } from '@auth';
import { extractError } from '@functions';
import { axios, router, toaster } from '@lib';
import { decode } from 'jsonwebtoken';

const login = async (ref, data) => {
  try {
    // Execute google reCAPTCHA
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    const { token } = await axios.post('login', data);
    if (!decode(token)) {
      throw new Error('Error! We cannot log you in at the moment');
    }
    store.dispatch({ type: 'SET', jwt: token });

    // Notify user and other actions
    toaster.success('Login successful');
    router.push('/mgt-portal/admin');
  } catch (err) {
    const { message } = extractError(err);
    if (message) {
      toaster.error(message);
    }

    // Reset google reCAPTCHA on invalid login
    ref.current.reset();
  }
};

export default login;
