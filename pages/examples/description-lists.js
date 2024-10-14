import { Layout, Preview } from '@examples/components';
import { DescriptionList } from '@examples/components/Lists';

const Page = () => {
  return (
    <Layout title="Description Lists">
      <div className="flex flex-col gap-8">
        <p className="text-base max-w-3xl text-gray-800">
          Use these Tailwind CSS description list components to present detailed information in a
          structured and readable format. These components are designed and built by the Tailwind
          CSS team, and include a variety of different styles and layouts.
        </p>
        <Preview title="Description Lists">
          <DescriptionList />
        </Preview>
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
