import { reset } from '@api/identity';
import { Password, Recaptcha } from '@components/Fields';
import { Fieldset, Submit } from '@components/Formik';
import { initialValues, validationSchema } from '@models/reset';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';

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
