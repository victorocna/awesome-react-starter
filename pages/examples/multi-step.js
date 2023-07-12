import { withAuth } from '@auth';
import { Layout } from '@components';
import { MultistepForm } from '@examples/components/Forms';

const Page = () => {
  return (
    <Layout title="Multi step Formik form">
      <MultistepForm />
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
