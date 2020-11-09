import jwt from 'jsonwebtoken';
import Router from 'next/router';

const redirect = (token) => {
  const decoded = jwt.decode(token);
  if (!decoded || !('role' in decoded)) {
    return false;
  }

  return Router.push('/dashboard');
};

export default redirect;
