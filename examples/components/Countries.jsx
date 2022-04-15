import { countries } from '../../data';

const Countries = () => {
  return countries.map((country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  ));
};

export default Countries;
