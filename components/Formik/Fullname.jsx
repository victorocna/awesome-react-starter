import { Field } from 'formik';
import { Input } from '../Fields';
import { Fieldset } from '.';

const Fullname = () => (
  <Fieldset
    name="fullname"
    label={<div className="text-gray-800 font-semibold">Full name</div>}
    help={<p className="text-gray-600">This information is required</p>}
  >
    <Field name="fullname" type="text" as={Input} />
  </Fieldset>
);

export default Fullname;
