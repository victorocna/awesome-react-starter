import { Button } from '@components';
import { useFormContext } from 'react-hook-form';

const Submit = ({ children, isLoading, ...props }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const disabled = isLoading || isSubmitting;

  return (
    <div className="flex items-center">
      <Button type="submit" className="button full primary" disabled={disabled} {...props}>
        {children}
      </Button>
      {(isLoading || isSubmitting) && (
        <img src="/icons/loading.gif" alt="loading" className="mx-1 w-6" />
      )}
    </div>
  );
};

export default Submit;
