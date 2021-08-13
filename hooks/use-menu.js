import { useEffect, useState } from 'react';
import { local } from 'store2';

const useMenu = (key) => {
  const initial = local.get(key);
  const [open, setOpen] = useState(initial);

  useEffect(() => {
    if (initial === null) {
      setOpen(true);
    }
  }, []);

  const toggleOpen = () => {
    setOpen((open) => {
      local.set(key, !open);
      return !open;
    });
  };

  return { open, setOpen, toggleOpen };
};

export default useMenu;
