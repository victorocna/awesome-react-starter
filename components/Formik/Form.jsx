import { AutoSubmit, Debug } from '@components/Formik';
import { Form as FormikForm } from 'formik';

const Form = ({ children, autoSubmit, debug, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const showDebug = debug || process.env.SHOW_FORMIK_DEBUG === 'yes';

  return (
    <FormikForm {...props}>
      {children}
      {showDebug && !isProduction && <Debug />}
      {autoSubmit && <AutoSubmit />}
    </FormikForm>
  );
};

export default Form;
