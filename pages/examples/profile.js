import { withAuth } from '@auth';
import { Layout } from '@components';
import { MyProfile } from '@examples/components';

const Page = () => {
  return (
    <Layout title="My profile">
      <MyProfile />
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
