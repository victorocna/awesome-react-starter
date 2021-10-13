import { Field } from 'formik';
import { Input } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const Fullname = () => {
  return (
    <Fieldset name="fullname" label="Full name" help="This information is required">
      <Field id="fullname" name="fullname" as={Input} />
    </Fieldset>
  );
};

export default Fullname;
