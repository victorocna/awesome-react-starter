import { checkAuth, withAuth } from '../../auth';
import { Layout, Profile } from '../../components/Demo';
import { Logout } from '../../components/Identity';

const Page = () => {
  return (
    <Layout>
      <h1 className="font-semibold mb-4">Admin homepage</h1>
      <Profile />
      <Logout />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
