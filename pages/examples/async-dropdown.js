import { AsyncDropdown } from '@components/Fields';
import { Layout } from '@examples/components';
import { useQuery } from '@hooks';

const Page = () => {
  const cryptoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5';
  const { data, status } = useQuery(cryptoUrl);

  const showCrypto = (data) => (
    <option key={data.symbol} value={data.symbol}>
      {data.name}
    </option>
  );

  return (
    <Layout title="Async Dropdown">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Dynamic values for the Dropdown element</strong>
          <br />
          Dropdown elements are an extended version of the HTML select based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4">
          <label htmlFor="async-dropdown-1" className="mb-0 cursor-pointer">
            Async crypto dropdown with placeholder
          </label>
          <div className="w-80">
            <AsyncDropdown
              id="async-dropdown-1"
              status={status}
              placeholder="Select your favorite crypto"
            >
              {data?.map(showCrypto)}
            </AsyncDropdown>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="async-dropdown-2" className="mb-0 cursor-pointer">
            Async crypto dropdown with default selection
          </label>
          <div className="w-80">
            <AsyncDropdown id="async-dropdown-2" status={status} value="btc">
              {data?.map(showCrypto)}
            </AsyncDropdown>
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
