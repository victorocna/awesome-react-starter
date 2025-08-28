import refreshToken from '@api/refresh-token';
import { store } from '@auth';
import { isRequestCanceled } from '@functions';
import axios from 'axios';
import { handle, isStream } from './axios-download';
import router from './router';

const API_BASE_URL = process.env.API_BASE_URL;

const Axios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const getJwtFromStore = () => {
  const jwt = store.getState();
  return typeof jwt === 'string' && jwt.length > 0 ? jwt : null;
};

const isAbsoluteUrl = (url) => {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
};

const isSameApiOrigin = (reqUrl) => {
  try {
    const api = new URL(API_BASE_URL);
    const target = isAbsoluteUrl(reqUrl) ? new URL(reqUrl) : api;
    return target.origin === api.origin;
  } catch {
    return true;
  }
};

const withBearer = (req) => {
  if (isAbsoluteUrl(req.url) && !isSameApiOrigin(req.url)) {
    return req;
  }

  const jwt = getJwtFromStore();
  if (jwt) {
    req.headers = req.headers || {};
    req.headers.authorization = `Bearer ${jwt}`;
  } else if (req.headers?.authorization) {
    delete req.headers.authorization;
  }
  return req;
};

const success = (res) => {
  return isStream(res?.headers) ? res : res?.data;
};

let refreshPromise = null;

const error = async (err) => {
  if (isRequestCanceled(err)) {
    throw err;
  }

  const status = err?.response?.status;
  const original = err?.config || {};

  if (status !== 401) {
    throw err;
  }

  if (original._retry) {
    router.push('/login').catch(() => {});
    err.__redirectToLogin = true;
    throw err;
  }

  if (!refreshPromise) {
    refreshPromise = (async () => {
      const token = await refreshToken();
      store.dispatch({ type: 'SET', jwt: token });
      return token;
    })().finally(() => {
      refreshPromise = null;
    });
  }

  let newToken = null;
  try {
    newToken = await refreshPromise;
  } catch {
    router.push('/login').catch(() => {});
    err.__redirectToLogin = true;
    throw err;
  }

  const sameOrigin = isSameApiOrigin(original.url);
  const retryConfig = {
    ...original,
    _retry: true,
    headers: {
      ...(original.headers || {}),
      ...(sameOrigin ? { authorization: `Bearer ${newToken}` } : {}),
    },
  };

  return Axios.request(retryConfig);
};

Axios.download = async (url, data) => {
  return handle(Axios, url, data);
};

Axios.interceptors.request.use(withBearer);
Axios.interceptors.response.use(success, error);

export default Axios;
