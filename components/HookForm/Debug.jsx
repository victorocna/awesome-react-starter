import { useFormContext, useWatch } from 'react-hook-form';

const Debug = () => {
  const { control } = useFormContext();
  const values = useWatch({ control });

  return (
    <pre className="bg-red-200 p-4 font-mono text-sm lg:px-8">
      {JSON.stringify(values, null, 2)}
    </pre>
  );
};

export default Debug;
