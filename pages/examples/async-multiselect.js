import { MultiSelectAsync } from '@components/Fields';
import { Layout } from '@examples/components';

const Page = () => {
  return (
    <Layout title="Async MultiSelect">
      <div className="prose-sm">
        <p className="mt-0 font-bold">Dynamic values for the MultiSelect element</p>

        <div className="mb-4">
          <label htmlFor="async-multiselect-1" className="mb-0 cursor-pointer">
            Async crypto multiselect
          </label>
          <div className="w-80">
            <MultiSelectAsync
              id="async-multiselect-1"
              api={`${process.env.APP_BASE_URL}/api/mock/assets`}
              getOptionToValue={(selectValue) => ({
                id: selectValue?.value,
                name: selectValue?.label,
              })}
              getValueToOption={(item) => ({
                value: item?.id,
                label: item?.name,
              })}
              onChange={() => {}}
              searchKey="search"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="async-multiselect-2" className="mb-0 cursor-pointer">
            Async crypto multiselect with initial values
          </label>
          <div className="w-80">
            <MultiSelectAsync
              id="async-multiselect-2"
              api={`${process.env.APP_BASE_URL}/api/mock/assets`}
              getOptionToValue={(selectValue) => ({
                id: selectValue?.value,
                name: selectValue?.label,
              })}
              getValueToOption={(item) => ({
                value: item?.id,
                label: item?.name,
              })}
              onChange={() => {}}
              searchKey="search"
              initialValues={[
                { id: 'bitcoin', name: 'Bitcoin' },
                { id: 'ethereum', name: 'Ethereum' },
              ]}
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
