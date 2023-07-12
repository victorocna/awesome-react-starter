import Router from 'next/router';
import React, { useEffect } from 'react';
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
      verifyUser();
    }, []);

    return <WrappedComponent withAuth {...props} />;
  };

  return Wrapper;
};

export default withAuth;
