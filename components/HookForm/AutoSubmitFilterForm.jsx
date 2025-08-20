import { Debug } from '@components/HookForm';
import { normalize } from '@functions';
import { yupResolver } from '@hookform/resolvers/yup';
import { debounce, isFunction } from 'lodash';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const AutoSubmitFilterForm = ({
  children,
  className,
  debug,
  initialValues,
  onSubmit,
  validationSchema,
  delay = 250,
  disabled = false,
}) => {
  const methods = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    defaultValues: initialValues,
    mode: 'onChange',
  });
  const { watch, reset, setFocus } = methods;

  const showDebug = debug || process.env.SHOW_FORM_DEBUG === 'yes';
  const isProduction = process.env.NODE_ENV === 'production';

  const firstRef = useRef(true);
  const onSubmitRef = useRef(onSubmit);
  const lastHashRef = useRef(null);
  const debRef = useRef(null);

  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  useEffect(() => {
    debRef.current?.cancel?.();
    debRef.current = debounce(() => {
      if (disabled) {
        return;
      }
      const run = methods.handleSubmit(
        (data) => {
          const { key } = normalize(data);
          if (key === lastHashRef.current) {
            return;
          }
          lastHashRef.current = key;
          if (isFunction(onSubmitRef.current)) {
            return onSubmitRef.current(data, methods);
          }
        },
        (errors) => {
          const firstError = Object.keys(errors || {})[0];
          if (firstError) {
            setFocus(firstError);
          }
        }
      );
      run();
    }, delay);

    return () => {
      debRef.current?.cancel?.();
    };
  }, [delay, disabled, methods, setFocus]);

  useEffect(() => {
    const sub = watch(() => {
      if (firstRef.current) {
        firstRef.current = false;
        return;
      }
      debRef.current?.();
    });
    return () => {
      sub?.unsubscribe?.();
    };
  }, [watch]);

  useEffect(() => {
    if (initialValues) {
      reset(initialValues, { keepDefaultValues: false });
      firstRef.current = true;
      lastHashRef.current = JSON.stringify(normalize(initialValues));
    }
  }, [initialValues, reset]);

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
