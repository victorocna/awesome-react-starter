import { useFormikContext } from 'formik';
import { Button } from '..';
import { isDisabled } from '../../functions';

const Submit = ({ children, isLoading, ...props }) => {
  const formikContext = useFormikContext();
  const disabled = isDisabled(isLoading, formikContext);

  return (
    <Button type="submit" className="button full accent" disabled={disabled} {...props}>
      {children}
      {isLoading && (
        <img src="/icons/loading.gif" alt="loading" className="mx-1 w-5 absolute right-0 top-2" />
      )}
    </Button>
  );
};

export default Submit;
