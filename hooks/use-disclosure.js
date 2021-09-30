import { useState } from 'react';

/**
 * Custom hook for handling common open/close/toggle scenarios
 *
 * @param {boolean} initialState
 * @returns Returns the opened state and helpers
 * @see https://chakra-ui.com/docs/hooks/use-disclosure
 */
const useDisclosure = (initialState = false) => {
  const [isOpen, setOpen] = useState(initialState);
  const show = () => {
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
  };
  const toggle = () => {
    setOpen(!isOpen);
  };

  return { isOpen, show, hide, toggle };
};

export default useDisclosure;
