import { signup } from '@api/identity';
import { Email, Input, Password, Recaptcha } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
import { initialValues, validationSchema } from '@models/signup';
import { useRef } from 'react';

const SignupForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await signup(ref, values);
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Field as={Input} autoFocus label="Your name" name="name" />
        <Field as={Email} label="Your email" name="email" />
        <Field as={Password} label="Your password" name="password" />
        <Submit className="button full primary">Signup</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </HookForm>
  );
};

export default SignupForm;
