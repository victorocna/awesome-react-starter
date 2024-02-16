import { withAuth } from '../../auth';
import { Layout } from '../../components';
import { ComplexForm } from '../../examples/components/Forms';

const Page = () => {
  return (
    <Layout title="Complex Formik form">
      <ComplexForm />
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
