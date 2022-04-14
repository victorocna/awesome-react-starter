import jwt from 'jsonwebtoken';
import store from '../auth/store';

const whoami = () => {
  try {
    const token = store.getState();
    const decoded = jwt.decode(token);

    return decoded;
  } catch (err) {
    return undefined;
  }
};

export default whoami;
