import { useFormikContext } from 'formik';
import { Button } from '..';

const Submit = ({ children, ...props }) => {
  const { isSubmitting, isValid, validateOnMount } = useFormikContext();
  const disabled = isSubmitting || (validateOnMount && !isValid);

  return (
    <Button type="submit" disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

export default Submit;
