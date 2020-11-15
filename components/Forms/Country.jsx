import { Field } from 'formik';
import countries from 'world-countries';
import { Fieldset, Select } from '.';

const Country = () => {
  const showCountries = (country) => (
    <option key={country.name.common} value={country.name.common}>
      {country.name.common}
    </option>
  );

  const CountrySelect = (props) => (
    <Select placeholder="Select your country" {...props}>
      {countries.map(showCountries)}
    </Select>
  );

  return (
    <Fieldset
      name="country"
      label={<div className="text-gray-800 font-semibold mb-1">Country</div>}
      help={<p className="text-gray-600">Required info</p>}
    >
      <Field name="country" as={CountrySelect} />
    </Fieldset>
  );
};

export default Country;
