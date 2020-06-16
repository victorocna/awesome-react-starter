import router from 'next/router';
import cookie from 'js-cookie';
import { redirect, toaster, wrapFetch } from '../functions';

export const login = async (data) => {
  try {
    const { token } = await wrapFetch(`login`, { data, withAuth: false, method: 'POST' });
    cookie.set(process.env.COOKIE_NAME, token);
    toaster.success('Welcome back 👋');
    redirect(token);
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const logout = () => {
  cookie.remove(process.env.COOKIE_NAME);
  toaster.success('You have been logged out 👋');
  router.push('/login');
};

export const signup = async (data) => {
  try {
    await wrapFetch(`signup`, { data, withAuth: false, method: 'POST' });
    toaster.success('Your account has been created');
    router.push('/thank-you');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const forgot = async (data, { resetForm }) => {
  try {
    await wrapFetch(`forgot`, { data, withAuth: false, method: 'POST' });
    toaster.success('You will receive an email with reset instructions');
    resetForm();
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const confirm = async (hash) => {
  return await wrapFetch(`confirm/${hash}`, { withAuth: false, method: 'POST' });
};

export const reset = async (hash, data, { resetForm }) => {
  try {
    await wrapFetch(`reset/${hash}`, { data, withAuth: false, method: 'POST' });
    toaster.success('Your password has been changed');
    resetForm();
  } catch ({ message }) {
    toaster.error(message);
  }
};
