import { useEffect, useState } from 'react';
import { local } from 'store2';

const useCollapsible = (key) => {
  const [isOpen, setOpen] = useState(false);

  const initial = local.get(key);
  useEffect(() => {
    if (initial === null) {
      // key does not exist in local storage
      setOpen(true);
    } else {
      // key exists in local storage
      setOpen(initial);
    }
  }, [initial]);

  const toggle = () => {
    setOpen((open) => {
      local.set(key, !open);
      return !open;
    });
  };

  return { isOpen, setOpen, toggle };
};

export default useCollapsible;
