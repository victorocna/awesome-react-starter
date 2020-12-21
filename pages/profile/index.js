import { checkAuth, withAuth } from '../../services/auth';
import { Layout, Profile } from '../../components/Demo';

const Page = () => (
  <Layout>
    <h1 className="font-semibold mb-4">My profile</h1>
    <Profile />
  </Layout>
);

export default Page;
