import router from 'next/router';
import { fetch, toaster } from '../functions';
import { login as loginAuth, logout as logoutAuth } from '../services/auth';

export const login = async (data) => {
  try {
    const message = await loginAuth(data);
    toaster.success(message);
    router.push('/dashboard');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const logout = async () => {
  try {
    const message = await logoutAuth();
    toaster.success(message);
    router.push('/login');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const signup = async (data) => {
  try {
    await fetch(`signup`, { data, withAuth: false, method: 'POST' });
    toaster.success('Your account has been created');
    router.push('/thank-you');
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const forgot = async (data, { resetForm }) => {
  try {
    await fetch(`forgot`, { data, withAuth: false, method: 'POST' });
    toaster.success('You will receive an email with reset instructions');
    resetForm();
  } catch ({ message }) {
    toaster.error(message);
  }
};

export const confirm = async (hash) => {
  return await fetch(`confirm/${hash}`, { withAuth: false, method: 'POST' });
};

export const reset = async (hash, data, { resetForm }) => {
  try {
    await fetch(`reset/${hash}`, { data, withAuth: false, method: 'POST' });
    toaster.success('Your password has been changed');
    resetForm();
  } catch ({ message }) {
    toaster.error(message);
  }
};
