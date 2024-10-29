import { axios } from '@lib';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { useEffect } from 'react';
import isRouteAllowed from './is-route-allowed';
import isTokenExpired from './is-token-expired';
import { store } from './store';

// Helper to verify and refresh the token if expired
const handleTokenVerification = async () => {
  let accessToken = store.getState();

  // Verify token validity
  if (accessToken && !isTokenExpired(jwt.decode(accessToken))) {
    return accessToken;
  }

  // Refresh the token if expired
  try {
    const { token: newToken } = await axios.post('/refresh-token', {}, { withCredentials: true });
    store.dispatch({ type: 'SET', jwt: newToken });
    return newToken;
  } catch (error) {
    store.dispatch({ type: 'REMOVE' });
    Router.push('/login');
    throw new Error('Failed to refresh token');
  }
};

// Helper for redirection based on route authorization
const handleAuthorization = async (accessToken) => {
  if (!isRouteAllowed(Router.pathname, accessToken)) {
    store.dispatch({ type: 'REMOVE' });
    Router.push('/login');
    throw new Error('Unauthorized access');
  }
};

// HOC for component authorization
const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    useEffect(() => {
      const verifyUser = async () => {
        try {
          const accessToken = await handleTokenVerification();
          await handleAuthorization(accessToken);
        } catch (error) {
          console.error('Authorization failed', error);
        }
      };

      verifyUser();

      // Re-run verification when window gains focus
      const handleFocus = () => verifyUser();
      window.addEventListener('focus', handleFocus);
      return () => window.removeEventListener('focus', handleFocus);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
