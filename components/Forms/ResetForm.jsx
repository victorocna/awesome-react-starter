import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Password, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/reset';
import { reset } from '../../api';

const ResetForm = ({ hash }) => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await reset(ref, hash, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="password" label="Your new password">
          <Field id="password" name="password" as={Password} autoFocus />
        </Fieldset>

        <Submit className="button full primary">Reset password</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ResetForm;
