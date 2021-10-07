import { Layout, ShowMore } from '../../components';

const Page = () => {
  return (
    <Layout title="Components">
      <div className="prose max-w-full">
        <h3>Show more</h3>
        <p>A quick element you can use to temporarly hide content from your interface.</p>
        <div className="prose-sm">
          <ShowMore>
            <div>Hidden at first, viewable after you click on show more</div>
            <div>You can add anything you want as children of the show more component.</div>
          </ShowMore>
          <p>
            Bacon ipsum dolor amet pork belly venison tongue, hamburger short loin spare ribs
            alcatra swine cow kielbasa boudin. Burgdoggen meatloaf drumstick ground round biltong
            pork. Tri-tip pig ground round, tail brisket shankle tongue jerky beef ribs venison
            tenderloin bacon strip steak. Tail biltong pork chop alcatra bresaola pork loin.
          </p>
          <ShowMore label="Optional info" visible={true}>
            <div>The same show more components, but with a twist.</div>
            <div>Visible on first render and with a custom label.</div>
          </ShowMore>
        </div>
      </div>
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
