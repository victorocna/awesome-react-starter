import { DevTool } from '@hookform/devtools';
import { isEmpty } from 'lodash';
import { useFormContext } from 'react-hook-form';

const Debug = () => {
  const { control } = useFormContext?.() ?? {};

  if (isEmpty(control)) {
    console.error('Debug component requires useFormContext to be used within a FormProvider.');
    return null;
  }

  return <DevTool control={control} />;
};

export default Debug;
