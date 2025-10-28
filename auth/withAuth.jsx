import Router from 'next/router';
import { useEffect, useState } from 'react';
import ensureUser from './ensure-user';
import store from './store';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withAuth = (WrappedComponent) => {
  const verifyUser = async (onSuccess) => {
    try {
      const token = await ensureUser();
      store.dispatch({ type: 'SET', jwt: token });
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch {
      Router.replace('/login');
    }
  };

  const Wrapper = (props) => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      let mounted = true;

      const onVerificationSuccess = () => {
        if (mounted) {
          setVerified(true);
        }
      };

      const handleFocus = () => {
        verifyUser(onVerificationSuccess);
      };

      verifyUser(onVerificationSuccess);

      // Refresh JWT token when window is focused
      window.addEventListener('focus', handleFocus);

      return () => {
        mounted = false;
        window.removeEventListener('focus', handleFocus);
      };
    }, []);

    if (!verified) {
      return null;
    }

    return <WrappedComponent withAuth {...props} />;
  };

  return Wrapper;
};

export default withAuth;
