import { Layout } from '@components';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@components/ui/sheet';
import { Button } from '@components/ui/button';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Sheet</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Slide panels triggering from left/right window bounds.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/sheet">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Configuration Console</SheetTitle>
                  <SheetDescription>Update database backups parameters.</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">Setup details go here.</p>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close Panel</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
    
            </div>
          </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Sheet">{page}</Layout>;
};
