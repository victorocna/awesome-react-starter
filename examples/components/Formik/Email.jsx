import { Field } from 'formik';
import { Email } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const FormikEmail = () => (
  <Fieldset
    name="email"
    label={<div className="text-gray-800 font-semibold">Email address</div>}
    help={<p className="text-gray-600">This information is required</p>}
  >
    <Field name="email" as={Email} />
  </Fieldset>
);

export default FormikEmail;
