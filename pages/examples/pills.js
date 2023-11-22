import { Pill } from '@components';
import { Layout } from '@examples/components';

const Page = () => {
  return (
    <Layout title="Pills">
      <div className="prose-sm">
        <p role="description" className="mt-0">
          Small labels that help qualify information.
        </p>
        <section className="flex gap-2">
          <Pill>Default pill</Pill>
          <Pill className="bg-yellow-200">Yellow pill</Pill>
          <Pill className="bg-purple-800 text-white">Purple pill</Pill>
        </section>
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
