import { login } from '@api/identity';
import { Email, Password, Recaptcha } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
import { initialValues, validationSchema } from '@models/login';
import { useRef } from 'react';

const LoginForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await login(ref, values);
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field as={Email} autoFocus={true} label="Your email" name="email" />
        <Field as={Password} label="Your password" name="password" />

        <Submit>Login</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </HookForm>
  );
};

export default LoginForm;
