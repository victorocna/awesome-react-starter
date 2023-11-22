import { store } from '@auth';
import { whoami } from '@functions';
import { useEffect, useState } from 'react';

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
