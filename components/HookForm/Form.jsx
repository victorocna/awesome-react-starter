import { Debug } from '@components/HookForm';
import { FieldGroup } from '@components/ui/field';

const Form = ({ children, debug, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const showDebug = debug || process.env.SHOW_FORM_DEBUG === 'yes';

  return (
    <FieldGroup {...props}>
      {children}
      {showDebug && !isProduction && <Debug />}
    </FieldGroup>
  );
};

export default Form;
