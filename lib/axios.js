import axios from 'axios';
import { isStream, handle } from './axios-download';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
  timeout: 4000,
});

const success = (res) => {
  return isStream(res.headers) ? res : res.data;
};
const error = async (err) => {
  throw err.response.data;
};

Axios.download = async (url, data) => {
  return handle(Axios, url, data);
};

Axios.interceptors.response.use(success, error);

export default Axios;
