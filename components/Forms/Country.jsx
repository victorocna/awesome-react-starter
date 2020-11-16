import { Field } from 'formik';
import { Fieldset, Dropdown } from '.';
import { countries } from '../../data';

const Country = () => {
  const CountryDropdown = (props) => (
    <Dropdown items={countries.map(({ name }) => name)} {...props} />
  );

  return (
    <Fieldset
      name="country"
      label={<div className="text-gray-800 font-semibold mb-1">Country</div>}
      help={<p className="text-gray-600">Uses custom dropdown</p>}
    >
      <Field name="country" as={CountryDropdown} />
    </Fieldset>
  );
};

export default Country;
