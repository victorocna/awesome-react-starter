import refreshToken from '@api/refresh-token';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { useEffect } from 'react';
import isRouteAllowed from './is-route-allowed';
import isTokenExpired from './is-token-expired';
import { store } from './store';

const verifyAndRefreshToken = async () => {
  const accessToken = store.getState();

  if (accessToken && !isTokenExpired(jwt.decode(accessToken))) {
    return accessToken;
  }

  try {
    return await refreshToken();
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
};

const authorizeRoute = (accessToken) => {
  if (!isRouteAllowed(Router.pathname, accessToken)) {
    throw new Error('Unauthorized access');
  }
};

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    useEffect(() => {
      const authenticateUser = async () => {
        try {
          const accessToken = await verifyAndRefreshToken();
          authorizeRoute(accessToken);
          store.dispatch({ type: 'SET', jwt: accessToken });
        } catch (error) {
          console.error('Authorization failed:', error);
          store.dispatch({ type: 'REMOVE' });
          Router.push('/login');
        }
      };

      authenticateUser();

      // Re-run verification on window focus
      window.addEventListener('focus', authenticateUser);
      return () => window.removeEventListener('focus', authenticateUser);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
