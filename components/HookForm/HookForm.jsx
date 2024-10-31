import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

const HookForm = ({ children, initialValues, validationSchema, onSubmit }) => {
  // Create a new form context
  const { handleSubmit, ...methods } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => onSubmit(data, methods))}>{children}</form>
    </FormProvider>
  );
};

export default HookForm;
