import jwt from 'jsonwebtoken';

const isLoggedIn = (token) => {
  return jwt.decode(token);
};

export default isLoggedIn;
