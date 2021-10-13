import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Email, Input, Password, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/signup';
import { signup } from '../../api';

const SignupForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await signup(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="name" label="Your name">
          <Field id="name" name="name" as={Input} autoFocus />
        </Fieldset>

        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} />
        </Fieldset>

        <Fieldset name="password" label="Your password">
          <Field id="password" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary">Signup</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default SignupForm;
