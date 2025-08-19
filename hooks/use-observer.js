import { useEffect, useState } from 'react';

const useObserver = (target, callback) => {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const obs = new MutationObserver(callback);
    setObserver(obs);
    return () => {
      if (obs) {
        obs.disconnect();
      }
    };
  }, [callback]);

  useEffect(() => {
    try {
      const targetEl = target && target.current ? target.current : target;
      if (!observer || !targetEl) {
        return;
      }
      const config = { childList: true, subtree: true };
      observer.observe(targetEl, config);
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.error('MutationObserver error:', error);
    }
  }, [observer, target, callback]);
};

export default useObserver;
