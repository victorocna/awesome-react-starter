import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
  timeout: 4000,
});

const success = (res) => {
  return res.data;
};
const error = async (err) => {
  throw err.response.data;
};

Axios.interceptors.response.use(success, error);

export default Axios;
