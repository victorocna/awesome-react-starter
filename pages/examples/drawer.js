import { Layout } from '@components';
import Link from 'next/link';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@components/ui/drawer';
import { Button } from '@components/ui/button';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Drawer</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A bottom sheet drawer component overlaying background panels.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/drawer">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm p-4">
                  <DrawerHeader>
                    <DrawerTitle>Metric Overview</DrawerTitle>
                    <DrawerDescription>View server logs from the past 24 hours.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 text-center">
                    <span className="text-3xl font-bold font-mono">1.2 GB/s</span>
                    <p className="text-xs text-muted-foreground mt-1">Average download speed recorded</p>
                  </div>
                  <DrawerFooter>
                    <Button>Submit Data</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
    
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
  return <Layout title="Drawer">{page}</Layout>;
};
