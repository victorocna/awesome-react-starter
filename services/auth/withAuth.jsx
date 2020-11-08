import React, { useEffect } from 'react';
import Router from 'next/router';
import store from './store';
import ensureUser from './ensure-user';

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
      verifyUser();
    }, []);

    return <WrappedComponent withAuth {...props} />;
  };

  return Wrapper;
};

export default withAuth;
