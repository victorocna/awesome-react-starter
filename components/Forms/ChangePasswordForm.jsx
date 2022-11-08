import { Field } from 'formik';
import { Password } from '../Fields';
import { Fieldset } from '../Formik';

const ChangePasswordForm = () => {
  return (
    <div className="space-y-6">
      <Fieldset name="changePassword" label="Password" help="Required info">
        <Field as={Password} name="changePassword" id="changePassword" autofocus />
      </Fieldset>

      <Fieldset name="confirmPassword" label="Confirm Password" help="Required info">
        <Field as={Password} name="confirmPassword" id="confirmPassword" />
      </Fieldset>
    </div>
  );
};

export default ChangePasswordForm;
