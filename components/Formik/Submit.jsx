import { useFormikContext } from 'formik';
import { Button } from '..';

const Submit = ({ children, isLoading, ...props }) => {
  const { isSubmitting, isValid, validateOnMount } = useFormikContext();
  const isDisabled = () => {
    return isSubmitting || (validateOnMount && !isValid);
  };

  return (
    <Button type="submit" className="button full accent" disabled={isDisabled()} {...props}>
      {children}
      {isLoading && (
        <img src="/icons/loading.gif" alt="loading" className="mx-1 w-5 absolute right-0 top-2" />
      )}
    </Button>
  );
};

export default Submit;
