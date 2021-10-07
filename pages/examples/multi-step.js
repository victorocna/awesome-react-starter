import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import { MultistepForm } from '../../examples/components/Forms';

const Page = () => {
  return (
    <Layout title="Multi step Formik form">
      <MultistepForm />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
