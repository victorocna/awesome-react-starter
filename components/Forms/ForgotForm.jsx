import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Email, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/forgot';
import { forgot } from '../../api';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await forgot(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} autoFocus />
        </Fieldset>
        <Submit className="button full primary">Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
