import { useState, useEffect } from 'react';
import { whoami } from '../functions';
import { store } from '../auth';

const useProfile = () => {
  const [status, setStatus] = useState('idle');
  const me = whoami();
  useEffect(() => {
    if (!me) {
      setStatus('loading');
    }
  }, [me]);

  store.subscribe(() => {
    if (store.getState()) {
      setStatus('success');
    }
  });

  return { status, me };
};

export default useProfile;
