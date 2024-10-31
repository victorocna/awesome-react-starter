import { Button } from '@components';
import { useFormContext } from 'react-hook-form';

const Submit = ({ children, isLoading, ...props }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const disabled = isLoading || isSubmitting;
  // Override the disabled prop when passed
  props.disabled = disabled;

  return (
    <div className="inline-flex items-center relative">
      <Button type="submit" className="button full primary" {...props}>
        <div>{children}</div>
      </Button>
      {disabled && (
        <img src="/icons/loading.gif" alt="loading" className="absolute inset-0 m-auto w-6 h-6" />
      )}
    </div>
  );
};

export default Submit;
