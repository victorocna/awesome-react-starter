import { ensureUser, store } from '@auth';
import Router from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const verifyAuth = async () => {
    try {
      const accessToken = await ensureUser();
      store.dispatch({ type: 'SET', jwt: accessToken });
    } catch (error) {
      console.error('Authorization failed:', error);
      store.dispatch({ type: 'REMOVE' });
      Router.push('/login');
    }
  };

  const Wrapper = (props) => {
    useEffect(() => {
      // Initial authentication check
      verifyAuth();

      // Re-run verification on window focus and cleanup
      window.addEventListener('focus', verifyAuth);
      return () => window.removeEventListener('focus', verifyAuth);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
