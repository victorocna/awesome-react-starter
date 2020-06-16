import { Formik, Form, Field } from 'formik';
import { Fieldset, Input, Password } from '../Forms';
import { Button } from '..';
import { login as loginValues } from '../../models';
import { login } from '../../controllers/identity';

const LoginForm = () => (
  <Formik {...loginValues} onSubmit={login}>
    {({ isSubmitting }) => (
      <Form>
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
        <Button type="submit" disabled={isSubmitting} className="mt-2">
          Login
        </Button>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
