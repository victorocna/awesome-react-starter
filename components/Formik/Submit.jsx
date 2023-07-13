import { Button } from '@components';
import { useFormikContext } from 'formik';

const Submit = ({ children, isLoading, ...props }) => {
  const { isValid, validateOnMount } = useFormikContext();
  const disabled = isLoading || (validateOnMount && !isValid);

  return (
    <div className="flex items-center">
      <Button type="submit" className="button full primary" disabled={disabled} {...props}>
        {children}
      </Button>
      {isLoading && <img src="/icons/loading.gif" alt="loading" className="mx-1 w-6" />}
    </div>
  );
};

export default Submit;
