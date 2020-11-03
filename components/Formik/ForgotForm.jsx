import { Formik, Form, Field } from 'formik';
import { Fieldset, Input, Submit } from '../Forms';
import { forgot as forgotValues } from '../../models';
import { forgot } from '../../controllers/identity';

const ForgotForm = () => (
  <Formik {...forgotValues} onSubmit={forgot}>
    <Form>
      <Fieldset
        name="email"
        className="mb-2"
        label={<div className="text-gray-800">Your email</div>}
      >
        <Field name="email" type="email" as={Input} />
      </Fieldset>
      <Submit className="mt-2">Send password reset email</Submit>
    </Form>
  </Formik>
);

export default ForgotForm;
