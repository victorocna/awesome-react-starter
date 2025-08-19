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
    <div className="relative inline-flex items-center">
      <Button type="submit" className="button full primary" {...props}>
        <div>{children}</div>
      </Button>
      {disabled && (
        <img src="/icons/loading.gif" alt="loading" className="absolute inset-0 m-auto h-6 w-6" />
      )}
    </div>
  );
};

export default Submit;
