import { withAuth } from '@auth';
import { Layout, NoSsr } from '@components';
import { Documentation } from '@examples/components';
import { MultiStepForm } from '@examples/components/Multistep';

const Page = () => {
  return (
    <Layout title="Complex multi step form">
      <div className="grid md:grid-cols-3 gap-4">
        <NoSsr>
          <MultiStepForm />
        </NoSsr>
        <Documentation />
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

export default withAuth(Page);
