import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

const HookForm = ({ children, initialValues, validationSchema, onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  // Function to mark all fields as touched
  const markAllFieldsTouched = () => {
    const values = methods.getValues(); // Get all registered fields
    Object.keys(values).forEach((field) => {
      methods.setValue(field, values[field], { shouldTouch: true });
    });
  };

  const handleSubmit = async (data) => {
    await onSubmit(data, methods);
  };
  const handleFail = async () => {
    markAllFieldsTouched();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit, handleFail)}>{children}</form>
    </FormProvider>
  );
};

export default HookForm;
