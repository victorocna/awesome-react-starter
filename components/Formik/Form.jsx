import { Form as FormikForm } from 'formik';
import Debug from './Debug';

const Form = ({ children, debug, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const showDebug = debug || process.env.SHOW_FORMIK_DEBUG === 'yes';

  return (
    <FormikForm {...props}>
      {children}
      {showDebug && !isProduction && <Debug />}
    </FormikForm>
  );
};

export default Form;
