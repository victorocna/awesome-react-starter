import { useFormikContext } from 'formik';

const Debug = () => {
  const formikContext = useFormikContext();

  return (
    <pre className="text-sm font-mono p-4 lg:px-8 bg-red-200">
      {JSON.stringify(formikContext, null, 2)}
    </pre>
  );
};

export default Debug;
