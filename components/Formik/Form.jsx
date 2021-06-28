import { Debug } from '.';
import { Form as FormikForm } from 'formik';

const Form = ({ children, debug, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const showDebug = debug && !isProduction;

  return (
    <FormikForm {...props}>
      {children}
      {showDebug && <Debug />}
    </FormikForm>
  );
};

export default Form;
