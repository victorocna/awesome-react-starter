import { Button } from '@components';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@components/ui/dialog';
import { Layout } from '@components';
import { useDisclosure } from '@hooks';

const Page = () => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <>
      <div className="prose-sm">
        <p role="description" className="mt-0">
          Modal components help you notify the user. <br /> Modals are positioned over everything
          else in the pages.
        </p>
        <section className="flex gap-2">
          <Button className="button full primary" onClick={show}>
            Open modal
          </Button>
          <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
              hide();
            }
          }}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hello world</DialogTitle>
                <DialogDescription>This is a dialog example.</DialogDescription>
              </DialogHeader>
              <p className="text-sm text-gray-800">
                Bacon ipsum dolor amet frankfurter meatloaf picanha, pork chop flank bacon turkey
                sausage jowl hamburger cow ham corned beef.
              </p>
              <DialogFooter>
                <Button className="button mini accent" onClick={hide}>
                  Close modal
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    </>
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


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Modals">{page}</Layout>;
};
