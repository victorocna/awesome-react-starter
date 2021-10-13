import { Field } from 'formik';
import { Textarea } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const Bio = () => {
  return (
    <Fieldset name="bio" label="Bio" help="Optional information about you">
      <Field id="bio" name="bio" as={Textarea} />
    </Fieldset>
  );
};

export default Bio;
