import { useEffect, useState } from 'react';
import { local } from 'store2';

const useMenu = (key) => {
  const [open, setOpen] = useState(false);

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

  const toggleOpen = () => {
    setOpen((open) => {
      local.set(key, !open);
      return !open;
    });
  };

  return { open, setOpen, toggleOpen };
};

export default useMenu;
