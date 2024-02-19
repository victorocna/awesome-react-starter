import { Dropdown, Fieldset } from '@components/Formik';
import { Field } from 'formik';
import { countries } from '../../../data';

const Country = () => {
  const showCountries = ({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  );

  return (
    <Fieldset name="country" label="Country" help="Uses custom dropdown">
      <Field id="country" name="country" placeholder="Select your country" as={Dropdown}>
        {countries.map(showCountries)}
      </Field>
    </Fieldset>
  );
};

export default Country;
