import { Debug } from '@components/HookForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

const AutoSubmitFilterForm = ({
  children,
  className,
  debug,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const showDebug = debug || process.env.SHOW_FORM_DEBUG === 'yes';
  const isProduction = process.env.NODE_ENV === 'production';

  const values = useWatch({ control: methods.control });
  const firstRef = useRef(true);
  const timeoutRef = useRef(null);
  const onSubmitRef = useRef(onSubmit);

  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }

    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (onSubmitRef.current) {
        onSubmitRef.current(values);
      }
    }, 250);

    return () => {
      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [values]);

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
