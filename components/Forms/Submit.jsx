import { useFormikContext } from 'formik';
import { Button } from '..';

const Submit = ({ children, onlyOnce, ...props }) => {
  const { isSubmitting, submitCount, isValid, validateOnMount } = useFormikContext();
  const disabled = isSubmitting || (validateOnMount && !isValid) || (onlyOnce && submitCount);

  return (
    <Button type="submit" disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

export default Submit;
