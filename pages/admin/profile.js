import { checkAuth, withAuth } from '../../auth';
import { Layout, Profile } from '../../components/Demo';

const Page = () => {
  return (
    <Layout>
      <h1 className="font-semibold mb-4">My profile</h1>
      <Profile />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
