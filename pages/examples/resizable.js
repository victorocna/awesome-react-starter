import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@components/ui/resizable';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Resizable Panels</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Draggable container splits.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/resizable">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="h-40 max-w-md rounded-lg border overflow-hidden">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={40} className="flex items-center justify-center bg-muted/30">
                  <span className="text-xs font-mono">Panel A</span>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={60} className="flex items-center justify-center bg-muted/60">
                  <span className="text-xs font-mono">Panel B</span>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
    
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
  return <Layout title="Resizable Panels">{page}</Layout>;
};
