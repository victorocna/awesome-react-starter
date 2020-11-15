import { Field } from 'formik';
import { Fieldset, Datepicker } from '.';

const DateOfBirth = () => (
  <Fieldset
    name="dateOfBirth"
    label={<div className="text-gray-800 font-semibold mb-1">Date of birth</div>}
    help={<p className="text-gray-600">Optional info</p>}
  >
    <Field name="dateOfBirth" as={Datepicker} />
  </Fieldset>
);

export default DateOfBirth;
