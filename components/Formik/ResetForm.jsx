import { Formik, Form, Field } from 'formik';
import { Fieldset, Password } from '../Forms';
import { Button } from '..';
import { reset as resetValues } from '../../models';
import { reset } from '../../controllers/identity';

const ResetForm = ({ hash }) => (
  <Formik {...resetValues} onSubmit={(values, helpers) => reset(hash, values, helpers)}>
    {({ isSubmitting }) => (
      <Form>
        <Fieldset
          name="password"
          className="mb-2"
          label={<div className="text-gray-800">Your new password</div>}
        >
          <Field name="password" as={Password} />
        </Fieldset>
        <Button type="submit" disabled={isSubmitting} className="mt-2">
          Reset password
        </Button>
      </Form>
    )}
  </Formik>
);

export default ResetForm;
