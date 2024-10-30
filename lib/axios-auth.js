import axios from 'axios';
import router from 'next/router';
import { refreshToken } from '../api/identity';
import store from '../auth/store';
import { handle, isStream } from './axios-download';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
});

const withBearer = (req) => {
  req.headers.authorization = `Bearer ${store.getState()}`;
  return req;
};
const success = (res) => {
  return isStream(res?.headers) ? res : res?.data;
};
const error = async (err) => {
  if (err?.response?.status !== 401) {
    throw err?.response?.data || err?.message || err;
  }

  try {
    const token = await refreshToken();
    store.dispatch({ type: 'SET', jwt: token });
  } catch (err) {
    return router.push('/login');
  }

  // rethrow the error
  throw err?.response?.data || err?.message || err;
};

Axios.download = async (url, data) => {
  return handle(Axios, url, data);
};

Axios.interceptors.request.use(withBearer);
Axios.interceptors.response.use(success, error);

export default Axios;
