import { Datepicker, Fieldset } from '@components/Formik';
import { Field } from 'formik';

const DateOfBirth = () => {
  return (
    <Fieldset name="dateOfBirth" label="Date of birth" help="Optional info">
      <Field id="dateOfBirth" name="dateOfBirth" as={Datepicker} />
    </Fieldset>
  );
};

export default DateOfBirth;
