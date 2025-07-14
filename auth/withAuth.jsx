import Router from 'next/router';
import { useEffect } from 'react';
import ensureUser from './ensure-user';
import store from './store';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const verifyUser = async () => {
      try {
        const token = await ensureUser();
        store.dispatch({ type: 'SET', jwt: token });
      } catch (err) {
        Router.push('/login');
      }
    };

    useEffect(() => {
      const handleFocus = async () => {
        verifyUser();
      };

      verifyUser();

      // Refresh JWT token when window is focused
      window.addEventListener('focus', handleFocus);
      return () => {
        window.removeEventListener('focus', handleFocus);
      };
    }, []);

    return <WrappedComponent withAuth {...props} />;
  };

  return Wrapper;
};

export default withAuth;
