import { useEffect, useState } from 'react';
import Router from 'next/router';
import ensureUser from './ensure-user';
import store from './store';

const withoutAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const verifyUser = async () => {
        try {
          const refresh = await ensureUser();
          // Add authorization logic here if needed
          Router.push('/admin');
          store.dispatch({ type: 'SET', jwt: refresh });
        } catch (err) {
          Router.push('/login');
          setIsLoading(false);
        }
      };

      verifyUser();
    }, []);

    if (isLoading) {
      return null;
    }

    return <WrappedComponent withoutAuth {...props} />;
  };

  return Wrapper;
};

export default withoutAuth;
