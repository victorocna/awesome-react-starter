import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Email, Password, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/login';
import { login } from '../../api';

const LoginForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await login(ref, values);
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

        <Fieldset name="password" label="Your password">
          <Field id="password" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary">Login</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
