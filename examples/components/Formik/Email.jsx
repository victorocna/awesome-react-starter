import { Field } from 'formik';
import { Email } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const FormikEmail = () => {
  return (
    <Fieldset name="email" label="Email address" help="This information is required">
      <Field id="email" name="email" as={Email} />
    </Fieldset>
  );
};

export default FormikEmail;
