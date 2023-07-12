import { Autocomplete } from '@components/Fields';
import { Layout } from '@examples/components';

const Page = () => {
  return (
    <Layout title="Autocomplete">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Autocomplete values for the Combobox element</strong>
          <br />
          Combobox elements are an extended version of the dropdown element based on the awesome NPM
          package <code>downshift</code>
        </p>

        <div className="mb-4">
          <label htmlFor="#" className="mb-0 cursor-pointer">
            Async crypto autocomplete with placeholder
          </label>
          <div className="w-80">
            <Autocomplete
              url="https://api.coincap.io/v2/assets?limit=5"
              placeholder="Search your favorite crypto"
              searchKey="search"
              optionValue="symbol"
              optionLabel="name"
            />
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
