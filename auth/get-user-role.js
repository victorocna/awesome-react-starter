import jwt from 'jsonwebtoken';

const getUserRole = (token) => {
  const decoded = jwt.decode(token);
  const { role } = decoded;

  return role;
};

export default getUserRole;
