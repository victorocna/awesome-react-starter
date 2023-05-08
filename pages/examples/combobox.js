import { Layout } from '../../examples/components';
import { Combobox } from '../../components/Fields';
import { countries } from '../../data';
import { useQuery } from '../../hooks';

const Page = () => {
  const showCountries = (country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  );

  // Dynamic combobox with cryptocurrencies
  const { data, status } = useQuery('https://api.coincap.io/v2/assets?limit=5');

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
          <label htmlFor="#" className="cursor-pointer mb-0">
            Simple combobox
          </label>
          <Combobox>
            <option value="marguerita">Pizza marguerita</option>
            <option value="salami">Pizza salami</option>
            <option value="capriciosa">Pizza capriciosa</option>
          </Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Combobox with countries
          </label>
          <Combobox>{countries.map(showCountries)}</Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Country combobox with placeholder
          </label>
          <Combobox placeholder="Select a country">{countries.map(showCountries)}</Combobox>
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Country combobox with default selection
          </label>
          <Combobox defaultSelected="DEU">{countries.map(showCountries)}</Combobox>
        </div>

        <p className="mt-0">
          <strong>More complex implementations</strong>
        </p>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Dynamic combobox with cryptocurrencies
          </label>
          {status === 'loading' && <Combobox></Combobox>}
          {status === 'success' && (
            <Combobox>
              {data?.data?.map((coin) => (
                <option key={coin.symbol} value={coin.symbol}>
                  {coin.name}
                </option>
              ))}
            </Combobox>
          )}
        </div>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Dynamic combobox with default selected
          </label>
          {status === 'loading' && <Combobox></Combobox>}
          {status === 'success' && (
            <Combobox>
              {data?.data?.map((coin) => (
                <option key={coin.symbol} value={coin.symbol}>
                  {coin.name}
                </option>
              ))}
            </Combobox>
          )}
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
