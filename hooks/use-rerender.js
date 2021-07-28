import { useState } from 'react';

const useRerender = (initialKey) => {
  const [key, setKey] = useState(`${initialKey}${Math.random()}`);

  const rerender = () => {
    return setKey(`${initialKey}${Math.random()}`);
  };

  return [key, rerender];
};

export default useRerender;
