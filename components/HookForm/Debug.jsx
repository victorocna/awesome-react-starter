import { DevTool } from '@hookform/devtools';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Debug = () => {
  const { control } = useFormContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <DevTool control={control} />;
};

export default Debug;

