import { Formik, Form, Field } from 'formik';
import { Fieldset, Input } from '../Forms';
import { Button } from '..';
import { forgot as forgotValues } from '../../models';
import { forgot } from '../../controllers/identity';

const ForgotForm = () => (
  <Formik {...forgotValues} onSubmit={forgot}>
    {({ isSubmitting }) => (
      <Form>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" type="email" as={Input} />
        </Fieldset>
        <Button type="submit" disabled={isSubmitting} className="mt-2">
          Send password reset email
        </Button>
      </Form>
    )}
  </Formik>
);

export default ForgotForm;
