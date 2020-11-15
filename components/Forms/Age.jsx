import { Field } from 'formik';
import { Fieldset, Input } from '.';

const Age = () => (
  <Fieldset
    name="age"
    label={<div className="text-gray-800 font-semibold mb-1">Age</div>}
    help={<p className="text-gray-600">Computed from your date of birth</p>}
  >
    <Field name="age" type="number" readOnly as={Input} />
  </Fieldset>
)

export default Age
