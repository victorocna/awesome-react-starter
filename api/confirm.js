import { axios } from '../services/api';

const confirm = async (hash) => {
  return await axios.post(`confirm/${hash}`);
};

export default confirm;
