import { DateOfBirth as DateOfBirthFormik, Fieldset } from '@components/Formik';
import { Field } from 'formik';

const DateOfBirth = () => {
  return (
    <Fieldset name="dateOfBirth" label="Date of birth" help="Optional info">
      <Field id="dateOfBirth" name="dateOfBirth" as={DateOfBirthFormik} />
    </Fieldset>
  );
};

export default DateOfBirth;
