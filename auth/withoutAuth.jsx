import { useEffect, useState } from 'react';
import Router from 'next/router';
import ensureUser from './ensure-user';
import store from './store';
import getUserRole from './get-user-role';

const withoutAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const verifyUser = async () => {
      try {
        setIsLoading(true);
        const token = await ensureUser();
        const role = getUserRole(token);

        Router.push(`/${role}`);
        store.dispatch({ type: 'SET', jwt: token });
      } catch (err) {
        Router.push('/login');
        setIsLoading(false);
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

    if (isLoading) {
      return null;
    }

    return <WrappedComponent withoutAuth {...props} />;
  };

  return Wrapper;
};

export default withoutAuth;
