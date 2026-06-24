import { Button } from '@components/ui/button';
import { Spinner } from '@components/ui/spinner';
import { useFormContext } from 'react-hook-form';

const Submit = ({ children, isLoading, ...props }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const disabled = isLoading || isSubmitting;
  // Override the disabled prop when passed
  props.disabled = disabled;

  return (
    <Button type="submit" {...props}>
      {isLoading || isSubmitting ? <Spinner data-icon="inline-start" /> : null}
      <div>{children}</div>
    </Button>
  );
};

export default Submit;
