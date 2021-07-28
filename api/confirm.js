import { fetch } from '../services/api';

const confirm = async (hash) => {
  return await fetch(`confirm/${hash}`, { withAuth: false, method: 'POST' });
};

export default confirm;
