import { useFormikContext } from 'formik';
import { useEffect } from 'react';

const AutoSubmit = () => {
  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    submitForm();
  }, [values]);

  return null;
};

export default AutoSubmit;
