import { Dropdown } from '@components/Fields';
import { Field } from '@components/HookForm';
import { countries } from '@data';

const Country = () => {
  return (
    <Field
      as={Dropdown}
      name="country"
      placeholder="Select your country"
      label="Country"
      help="Uses custom dropdown"
    >
      {countries.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </Field>
  );
};

export default Country;
