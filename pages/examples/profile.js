import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import { Profile } from '../../examples/components';

const Page = () => {
  return (
    <Layout title="My profile">
      <Profile />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
