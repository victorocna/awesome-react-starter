import axios from 'axios';
import router from 'next/router';
import refreshToken from '../api/refresh-token';
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
  return res.data;
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

Axios.interceptors.request.use(withBearer);
Axios.interceptors.response.use(success, error);

export default Axios;
