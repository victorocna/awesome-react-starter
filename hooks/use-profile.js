import { useState, useEffect } from 'react';
import { store } from '@auth';
import { whoami } from '@functions';

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
