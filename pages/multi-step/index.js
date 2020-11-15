import { checkAuth, withAuth } from '../../services/auth';
import { Layout, Multistep } from '../../components/Demo';

const Dashboard = () => (
  <Layout>
    <h1 className="font-semibold mb-4">Multi step Formik form</h1>
    <Multistep />
  </Layout>
);

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Dashboard);
