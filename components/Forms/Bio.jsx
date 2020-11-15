import { Field } from 'formik';
import { Fieldset, Textarea } from '../Forms';

const Bio = () => (
  <Fieldset
    name="bio"
    label={<div className="text-gray-800 font-semibold mb-1">Bio</div>}
    help={<p className="text-gray-600">Optional information about you</p>}
  >
    <Field name="bio" as={Textarea} />
  </Fieldset>
);

export default Bio;
