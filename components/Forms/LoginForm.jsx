import { login } from '@api/identity';
import { Email, Password, Recaptcha } from '@components/Fields';
import { Field, Fieldset, HookForm, Submit } from '@components/HookForm';
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
        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} autoFocus={true} />
        </Fieldset>

        <Fieldset name="password" label="Your password">
          <Field id="password" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary">Login</Submit>
        <Recaptcha ref={ref} />
      </div>
    </HookForm>
  );
};

export default LoginForm;
