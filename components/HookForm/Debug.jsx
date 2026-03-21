import { DevTool } from '@hookform/devtools';
import { useFormContext } from 'react-hook-form';

const Debug = () => {
  const { control } = useFormContext();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return <DevTool control={control} />;
};

export default Debug;
