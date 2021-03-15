import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Fieldset, Input, Password, Recaptcha, Submit } from '../Forms';
import { validationSchema, initialValues } from '../../models/login';
import { login } from '../../controllers';

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
      <Form>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" type="email" as={Input} autoFocus />
        </Fieldset>
        <Fieldset
          name="password"
          className="mb-2"
          label={<div className="text-gray-800">Your password</div>}
        >
          <Field name="password" as={Password} />
        </Fieldset>
        <Submit>Login</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
