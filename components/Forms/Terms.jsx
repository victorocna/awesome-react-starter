import { Field } from 'formik';
import { Fieldset, Checkbox } from '.';

const Terms = () => {
  const TermsCheckbox = (props) => (
    <Checkbox
      label={
        <div className="text-gray-800 font-semibold mb-1">
          I accept the terms and conditions of this application
        </div>
      }
      {...props}
    />
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
