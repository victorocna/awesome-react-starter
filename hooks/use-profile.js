import { store } from '@auth';
import { whoami } from '@functions';
import { useEffect, useState } from 'react';

const useProfile = () => {
  const me = whoami();

  // Initialize status based on current auth info so we don't trigger
  // unnecessary transitions on mount.
  const [status, setStatus] = useState(() => {
    if (me) {
      return 'success';
    }
    if (store.getState()) {
      return 'success';
    }
    return 'idle';
  });

  // If there's no `me` at the moment, mark as pending while we wait for
  // authentication to possibly arrive via the store subscription.
  useEffect(() => {
    if (!me) {
      setStatus('pending');
    }
  }, [me]);

  // Subscribe to the auth store only once and clean up on unmount.
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // Use functional setState to avoid referencing stale closures and to
      // only change status when auth is present.
      setStatus((prev) => (store.getState() ? 'success' : prev));
    });

    return unsubscribe;
  }, []);

  return { status, me };
};

export default useProfile;
