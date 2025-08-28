import { useEffect, useRef } from 'react';

// useObserver attaches a MutationObserver to a target DOM node.
// It keeps the observer instance in a ref (no state) and stores the
// latest callback in a ref so the observer callback does not change
// identity across renders. This prevents re-creating the observer on
// every render when the provided callback is re-defined inline.
const useObserver = (target, callback) => {
  const observerRef = useRef(null);
  const callbackRef = useRef(callback);

  // Keep latest callback in a ref without re-creating the observer.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Create the observer once.
  useEffect(() => {
    const obs = new MutationObserver((mutations, obsInstance) => {
      if (typeof callbackRef.current === 'function') {
        callbackRef.current(mutations, obsInstance);
      }
    });
    observerRef.current = obs;
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  // Observe the provided target when available.
  useEffect(() => {
    try {
      const targetEl = target && target.current ? target.current : target;
      if (!observerRef.current || !targetEl) {
        return;
      }
      const config = { childList: true, subtree: true };
      observerRef.current.observe(targetEl, config);
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } catch (error) {
      console.error('MutationObserver error:', error);
    }
  }, [target]);
};

export default useObserver;
