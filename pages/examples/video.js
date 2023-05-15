import { Layout, Video } from '../../components';

const Page = () => {
  return (
    <Layout>
      <Video video="/videos/videoplayback.mp4" />
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

export default Page;
