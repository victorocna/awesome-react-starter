import { useEffect, useState } from 'react';

const useObserver = (target, callback) => {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const obs = new MutationObserver(callback);
    setObserver(obs);
  }, []);

  const config = { childList: true, subtree: true };
  useEffect(() => {
    try {
      if (!observer || !target) {
        return;
      }
      observer.observe(target, config);
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.error('MutationObserver error:', error);
    }
  }, [observer, target]);
};

export default useObserver;
