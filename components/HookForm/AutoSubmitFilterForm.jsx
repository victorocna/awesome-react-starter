import { Debug } from '@components/HookForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const AutoSubmitFilterForm = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  debug,
  className,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const onSubmitRef = useRef(onSubmit);
  const hasInitialized = useRef(false);

  const showDebug = debug || process.env.SHOW_FORM_DEBUG === 'yes';
  const isProduction = process.env.NODE_ENV === 'production';

  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  useEffect(() => {
    const subscription = methods.watch((values) => {
      // Skip the very first call (initialization)
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        return;
      }

      if (onSubmitRef.current) {
        onSubmitRef.current(values);
      }
    });

    return () => {
      if (subscription && subscription.unsubscribe) {
        subscription.unsubscribe();
      }
    };
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <form className={className}>
        {children}
        {showDebug && !isProduction && <Debug />}
      </form>
    </FormProvider>
  );
};

export default AutoSubmitFilterForm;
