import { Input } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const Fullname = () => {
  return (
    <Fieldset name="fullname" label="Full name" help="This information is required">
      <Field id="fullname" name="fullname" as={Input} />
    </Fieldset>
  );
};

export default Fullname;
