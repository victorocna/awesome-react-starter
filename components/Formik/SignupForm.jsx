import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Fieldset, Input, Password, Submit, Recaptcha } from '../Forms';
import { validationSchema, initialValues } from '../../models/signup';
import { signup } from '../../controllers';

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
          <Field name="name" type="text" as={Input} autoFocus />
        </Fieldset>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" type="email" as={Input} />
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
