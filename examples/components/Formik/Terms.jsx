import { Checkbox } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const Terms = () => {
  const TermsCheckbox = (props) => (
    <Checkbox {...props}>
      <div className="font-semibold text-gray-800">
        I accept the terms and conditions of this application
      </div>
    </Checkbox>
  );

  return (
    <Fieldset
      name="terms"
      help="For more info about these terms and conditions, visit our dedicated page"
    >
      <Field id="termns" name="terms" as={TermsCheckbox} />
    </Fieldset>
  );
};

export default Terms;
