import axios from 'axios';
import router from 'next/router';
import { isStream, handle } from './axios-download';
import { refreshToken } from '../api';
import store from '../auth/store';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
  timeout: 4000,
});

const withBearer = (req) => {
  req.headers.authorization = `Bearer ${store.getState()}`;
  return req;
};
const success = (res) => {
  return isStream(res.headers) ? res : res.data;
};
const error = async (err) => {
  if (err.response.status !== 401) {
    throw err.response.data;
  }

  try {
    await refreshToken();
  } catch (err) {
    return router.push('/login');
  }

  // rethrow the error
  throw err.response.data;
};

Axios.download = async (url, data) => {
  return handle(Axios, url, data);
};

Axios.interceptors.request.use(withBearer);
Axios.interceptors.response.use(success, error);

export default Axios;
