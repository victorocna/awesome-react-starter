import { withAuth } from '@auth';
import { Layout } from '@components';
import { Documentation } from '@examples/components';
import { HeaderSteps, StepTwo } from '@examples/components/Multistep';

const Page = () => {
  return (
    <Layout title="Multi step Formik form">
      <div className="grid md:grid-cols-3 gap-4">
        <article className="md:col-span-2 bg-white p-4 rounded-md">
          <HeaderSteps step="2" />
          <StepTwo />
        </article>
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
