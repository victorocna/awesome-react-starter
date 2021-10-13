import { Field } from 'formik';
import { Checkbox } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const Terms = () => {
  const TermsCheckbox = (props) => (
    <Checkbox {...props}>
      <div className="text-gray-800 font-semibold">
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
