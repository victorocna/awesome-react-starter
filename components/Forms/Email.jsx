import { Field } from 'formik';
import { Fieldset, Input } from '../Forms';

const Email = () => (
  <Fieldset
    name="email"
    label={<div className="text-gray-800 font-semibold mb-1">Email address</div>}
    help={<p className="text-gray-600">This information is required</p>}
  >
    <Field name="email" type="email" as={Input} />
  </Fieldset>
);

export default Email;
