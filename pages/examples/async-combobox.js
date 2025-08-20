import { AsyncCombobox } from '@components/Fields';
import { Layout } from '@examples/components';
import { useQuery } from '@hooks';

const Page = () => {
  const { data, status } = useQuery(`${process.env.APP_BASE_URL}/api/mock/assets?limit=5`);

  const showCrypto = (data) => (
    <option key={data.symbol} value={data.symbol}>
      {data.name}
    </option>
  );

  return (
    <Layout title="Async Combobox">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Dynamic values for the Combobox element</strong>
          <br />
          Combobox elements are an extended version of the dropdown element based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4">
          <label htmlFor="async-crypto-dropdown-placeholder" className="mb-0 cursor-pointer">
            Async crypto dropdown with placeholder
          </label>
          <div className="w-80">
            <AsyncCombobox
              id="async-crypto-dropdown-placeholder"
              status={status}
              placeholder="Select your favorite crypto"
            >
              {data?.map(showCrypto)}
            </AsyncCombobox>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="async-crypto-dropdown-default" className="mb-0 cursor-pointer">
            Async crypto dropdown with default selection
          </label>
          <div className="w-80">
            <AsyncCombobox id="async-crypto-dropdown-default" status={status} value="BTC">
              {data?.map(showCrypto)}
            </AsyncCombobox>
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
