import { axios } from '@lib';

const confirm = async (ref, hash, data = {}) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    const { message } = await axios.post(`confirm/${hash}`, data);

    return message;
  } catch ({ message }) {
    // reset google recaptcha on error
    ref.current.reset();

    return message;
  }
};

export default confirm;
