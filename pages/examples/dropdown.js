import { Dropdown } from '@components/Fields';
import { Layout } from '@examples/components';
import { countries } from '../../data';

const Page = () => {
  const showCountries = (country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  );

  return (
    <Layout title="Dropdown">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Looks like a HTML select, but it's not a HTML select</strong>
          <br />
          Dropdown elements are an extended version of the HTML select based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Simple dropdown
          </label>
          <Dropdown>
            <option value="marguerita">Pizza marguerita</option>
            <option value="salami">Pizza salami</option>
            <option value="capriciosa">Pizza capriciosa</option>
          </Dropdown>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Dropdown with countries
          </label>
          <Dropdown>{countries.map(showCountries)}</Dropdown>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Country dropdown with placeholder
          </label>
          <Dropdown placeholder="Select a country">{countries.map(showCountries)}</Dropdown>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Country dropdown with default selection
          </label>
          <Dropdown defaultSelected="DEU">{countries.map(showCountries)}</Dropdown>
        </div>

        <div className="mb-4">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Country dropdown with placeholder and default selection
          </label>
          <div className="w-80">
            <Dropdown defaultSelected="USA" placeholder="Select a country">
              {countries.map(showCountries)}
            </Dropdown>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Disabled dropdown with default selection
          </label>
          <div className="w-80">
            <Dropdown defaultSelected="USA" disabled={true}>
              {countries.map(showCountries)}
            </Dropdown>
          </div>
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
