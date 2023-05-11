import { checkAuth, withAuth } from '../../auth';
import { Layout, Videoplayer } from '../../components';

const Page = () => {
  return (
    <Layout>
      <Videoplayer video="/videos/videoplayback.mp4" />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
