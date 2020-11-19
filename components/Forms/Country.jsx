import { Field } from 'formik';
import { Fieldset, Dropdown } from '.';
import { countries } from '../../data';

const Country = () => {
  const showCountries = ({ name, value }) => (
    <option key={value} value={value}>
      {name}
    </option>
  );

  return (
    <Fieldset
      name="country"
      label={<div className="text-gray-800 font-semibold mb-1">Country</div>}
      help={<p className="text-gray-600">Uses custom dropdown</p>}
    >
      <Field name="country" placeholder="Select your country" as={Dropdown}>
        {countries.map(showCountries)}
      </Field>
    </Fieldset>
  );
};

export default Country;
