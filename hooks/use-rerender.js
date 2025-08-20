import { useCallback, useState } from 'react';

const useRerender = (initialKey = '') => {
  const [key, setKey] = useState(`${initialKey}${Math.random()}`);

  // Stable callback so consumers can safely include `rerender` in deps
  const rerender = useCallback(() => {
    setKey(`${initialKey}${Math.random()}`);
  }, [initialKey]);

  return [key, rerender];
};

export default useRerender;
