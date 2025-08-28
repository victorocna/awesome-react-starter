import axios from 'axios';
import { handle, isStream } from './axios-download';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
});

const success = (res) => {
  return isStream(res?.headers) ? res : res?.data;
};

const error = (err) => {
  throw err.response?.data || err.message || err;
};

Axios.download = async (url, data) => {
  return handle(Axios, url, data);
};

Axios.interceptors.response.use(success, error);

export default Axios;
