import { Field } from 'formik';
import { Input } from '../Fields';
import { Fieldset } from '.';

const Email = () => (
  <Fieldset
    name="email"
    label={<div className="text-gray-800 font-semibold">Email address</div>}
    help={<p className="text-gray-600">This information is required</p>}
  >
    <Field name="email" type="email" as={Input} />
  </Fieldset>
);

export default Email;
