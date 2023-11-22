import { useFormikContext } from 'formik';

const Debug = () => {
  const formikContext = useFormikContext();

  return (
    <pre className="bg-red-200 p-4 font-mono text-sm lg:px-8">
      {JSON.stringify(formikContext, null, 2)}
    </pre>
  );
};

export default Debug;
