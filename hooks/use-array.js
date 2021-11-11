import { useState } from 'react';

const useArray = (initial = []) => {
  const [state, setState] = useState(initial);

  const push = (item) => {
    setState((state) => {
      return [...state, item];
    });
  };
  const remove = (index) => {
    setState((state) => {
      return [...state.slice(0, index), ...state.slice(index + 1)];
    });
  };
  const insert = (item, index) => {
    return [...state.slice(0, index), item, ...state.slice(index)];
  };

  return {
    values: state,
    push,
    insert,
    remove,
  };
};

export default useArray;
