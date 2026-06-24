import { Layout } from '@components';
import Link from 'next/link';
import { Tooltip, TooltipTrigger, TooltipContent } from '@components/ui/tooltip';
import { Button } from '@components/ui/button';
import { HelpCircle } from 'lucide-react';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Tooltip</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Small popup text boxes explaining trigger nodes on hover.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/tooltip">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Help instructions overlay.
              </TooltipContent>
            </Tooltip>
    
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
  return <Layout title="Tooltip">{page}</Layout>;
};
