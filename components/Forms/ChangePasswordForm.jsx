import { Password } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

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
