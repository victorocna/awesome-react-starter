import React from 'react';

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}) {
  const targetEl = target && target.current;
  const rootEl = root && root.current;

  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    if (!targetEl) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: rootEl,
        rootMargin,
        threshold,
      }
    );

    observer.observe(targetEl);

    return () => {
      observer.unobserve(targetEl);
      observer.disconnect();
    };
  }, [enabled, targetEl, rootEl, onIntersect, rootMargin, threshold, target, root]);
}
