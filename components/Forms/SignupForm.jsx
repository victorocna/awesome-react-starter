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
      <Form>
        <Fieldset
          name="name"
          className="mb-2"
          label={<div className="text-gray-800">Your name</div>}
        >
          <Field name="name" as={Input} autoFocus />
        </Fieldset>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" as={Email} />
        </Fieldset>
        <Fieldset
          name="password"
          className="mb-2"
          label={<div className="text-gray-800">Your password</div>}
        >
          <Field name="password" as={Password} />
        </Fieldset>
        <Submit>Signup</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default SignupForm;
