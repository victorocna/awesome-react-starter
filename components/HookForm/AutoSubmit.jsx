import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const AutoSubmit = () => {
  const { watch, handleSubmit } = useFormContext();

  // Watch all form values
  const values = watch();

  // Submit the form whenever values change
  useEffect(() => {
    handleSubmit(() => {});
  }, [values, handleSubmit]);

  return null;
};

export default AutoSubmit;
