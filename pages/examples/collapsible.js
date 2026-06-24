import { Layout } from '@components';
import Link from 'next/link';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@components/ui/collapsible';
import { Button } from '@components/ui/button';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Collapsible</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  An interactive component that allows toggling the visibility of sections.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/collapsible">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Collapsible className="max-w-md">
              <div className="flex items-center justify-between border p-3 rounded-lg bg-muted/10">
                <span className="font-semibold text-sm">Collapsible Toggle Box</span>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm">Show Details</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-2 text-sm text-muted-foreground p-3 border rounded-lg bg-muted/20">
                This content unfolds dynamically upon triggering. Useful for side panels or FAQ summaries.
              </CollapsibleContent>
            </Collapsible>
    
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
  return <Layout title="Collapsible">{page}</Layout>;
};
