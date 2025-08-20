import { login } from '@api/identity';
import { Email, Password, Recaptcha } from '@components/Fields';
import { Field, HookForm, Submit } from '@components/HookForm';
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
      <div className="space-y-4">
        <Field as={Email} autoFocus label="Your email" name="email" />
        <Field as={Password} label="Your password" name="password" />
        <Submit className="button full primary">Login</Submit>
        <Recaptcha ref={ref} />
      </div>
    </HookForm>
  );
};

export default LoginForm;
