import { useFormContext, useWatch } from 'react-hook-form';

const Debug = () => {
  const { control, formState } = useFormContext();
  const values = useWatch({ control });

  // Full form state debug object
  const debugValues = {
    values,
    errors: formState.errors,
    touchedFields: formState.touchedFields,
    dirtyFields: formState.dirtyFields,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
  };

  return (
    <pre className="bg-red-200 p-4 font-mono text-sm lg:px-8">
      {JSON.stringify(debugValues, null, 2)}
    </pre>
  );
};

export default Debug;
