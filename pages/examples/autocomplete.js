import { Layout } from '../../examples/components';
import { Autocomplete } from '../../components/Fields';

const Page = () => {
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
          <label htmlFor="#" className="cursor-pointer mb-0">
            Async crypto dropdown with placeholder
          </label>
          <div className="w-80">
            <Autocomplete
              url="https://api.coincap.io/v2/assets"
              limit="5"
              searchKey="search"
              optionValue="symbol"
              optionLabel="name"
              placeholder="Search your favorite crypto"
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
