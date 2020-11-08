import { checkAuth, withAuth } from '../../services/auth';
import { Layout } from '../../components/Demo';

const Page = () => (
  <Layout>
    <h1 className="font-semibold">My profile</h1>
  </Layout>
);

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
