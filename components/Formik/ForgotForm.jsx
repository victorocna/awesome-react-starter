import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Fieldset, Input, Submit, Recaptcha } from '../Forms';
import { validationSchema, initialValues } from '../../models/forgot';
import { forgot } from '../../controllers';

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
      <Form>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" type="email" as={Input} autoFocus />
        </Fieldset>
        <Submit onlyOnce>Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
