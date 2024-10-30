import refreshToken from '@api/refresh-token';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { useEffect } from 'react';
import isRouteAllowed from './is-route-allowed';
import isTokenExpired from './is-token-expired';
import { store } from './store';

const verifyAndRefreshToken = async () => {
  let accessToken = store.getState();

  if (!accessToken || isTokenExpired(jwt.decode(accessToken))) {
    try {
      accessToken = await refreshToken();
      store.dispatch({ type: 'SET', jwt: accessToken });
    } catch (error) {
      store.dispatch({ type: 'REMOVE' });
      Router.push('/login');
      throw new Error('Token refresh failed');
    }
  }

  return accessToken;
};

const authorizeRoute = (accessToken) => {
  if (!isRouteAllowed(Router.pathname, accessToken)) {
    store.dispatch({ type: 'REMOVE' });
    Router.push('/login');
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
        } catch (error) {
          console.error('Authorization failed:', error);
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
