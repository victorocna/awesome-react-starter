import Router from 'next/router';
import { useEffect } from 'react';
import ensureUser from './ensure-user';
import store from './store';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withAuth = (WrappedComponent) => {
  const verifyUser = async () => {
    try {
      const refresh = await ensureUser();
      store.dispatch({ type: 'SET', jwt: refresh });
    } catch (err) {
      Router.push('/login');
    }
  };

  const Wrapper = (props) => {
    useEffect(() => {
      const handleFocus = async () => {
        const refresh = await ensureUser();
        store.dispatch({ type: 'SET', jwt: refresh });
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
