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
      help={
        <p className="text-gray-600">
          For more info about these terms and conditions, visit our dedicated page
        </p>
      }
    >
      <Field name="terms" as={TermsCheckbox} />
    </Fieldset>
  );
};

export default Terms;
