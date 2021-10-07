import { axios } from '../lib';

const confirm = async (hash) => {
  return await axios.post(`confirm/${hash}`);
};

export default confirm;
