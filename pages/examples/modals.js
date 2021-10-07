import { Layout, Button, Modal } from '../../components';
import { useDisclosure } from '../../hooks';

const Page = () => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <Layout title="Components">
      <div className="prose max-w-full">
        <h3>Modals</h3>
        <p role="description">
          Modal components help you notify the user. <br /> Modals are positioned over everything
          else in the pages.
        </p>
        <section className="flex gap-2">
          <Button className="button full primary" onClick={show}>
            Open modal
          </Button>
          <Modal
            isOpen={isOpen}
            hide={hide}
            title="Hello world"
            footer={
              <Button className="button mini accent" onClick={hide}>
                Close modal
              </Button>
            }
          >
            <p className="text-sm text-gray-800">
              Bacon ipsum dolor amet frankfurter meatloaf picanha, pork chop flank bacon turkey
              sausage jowl hamburger cow ham corned beef.
            </p>
          </Modal>
        </section>
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
