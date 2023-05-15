import { checkAuth, withAuth } from '../../auth';
import { Layout, Video } from '../../components';

const Page = () => {
  return (
    <Layout>
      <Video video="/videos/videoplayback.mp4" />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
