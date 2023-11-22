import { Combobox } from '@components/Fields';
import { Layout } from '@examples/components';
import { countries } from '../../data';

const Page = () => {
  const showCountries = (country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  );

  return (
    <Layout title="Combobox">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>A dropdown and an autocomplete in the same component</strong>
          <br />
          Combobox elements are an extended version of the dropdown element based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Simple combobox
          </label>
          <Combobox>
            <option value="marguerita">Pizza marguerita</option>
            <option value="salami">Pizza salami</option>
            <option value="capriciosa">Pizza capriciosa</option>
          </Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Combobox with countries
          </label>
          <Combobox>{countries.map(showCountries)}</Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Country combobox with placeholder
          </label>
          <Combobox placeholder="Select a country">{countries.map(showCountries)}</Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Country combobox with default selection
          </label>
          <Combobox defaultSelected="DEU">{countries.map(showCountries)}</Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Disabled combobox with default selection
          </label>
          <Combobox defaultSelected="DEU" disabled={true}>
            {countries.map(showCountries)}
          </Combobox>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
