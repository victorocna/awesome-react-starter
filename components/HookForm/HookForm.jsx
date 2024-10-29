import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

const Form = ({ children, initialValues, validationSchema, onSubmit }) => {
  // Create a new form context
  const { handleSubmit, ...methods } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
