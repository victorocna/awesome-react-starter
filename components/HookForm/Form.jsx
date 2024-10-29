import { Debug } from '@components/HookForm';

const Form = ({ children, autoSubmit, debug, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const showDebug = debug || process.env.SHOW_FORM_DEBUG === 'yes';

  return (
    <div {...props}>
      {children}
      {showDebug && !isProduction && <Debug />}
    </div>
  );
};

export default Form;
