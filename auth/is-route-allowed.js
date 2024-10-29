import jwt from 'jsonwebtoken';

const isRouteAllowed = (pathname, token) => {
  if (!pathname) return false;
  if (!token) return false;

  try {
    const { role } = jwt.decode(token);
    if (!role) return false;
    return pathname.startsWith(`/${role}`);
  } catch (error) {
    console.error('Token decoding error:', error);
    return false;
  }
};

export default isRouteAllowed;
