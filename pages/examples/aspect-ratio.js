import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { AspectRatio } from '@components/ui/aspect-ratio';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Aspect Ratio</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Displays content within a desired ratio (e.g. 16:9).
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/aspect-ratio">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="w-[450px]">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden flex items-center justify-center border">
                <span className="text-muted-foreground font-mono">16:9 Aspect Ratio</span>
              </AspectRatio>
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
  return <Layout title="Aspect Ratio">{page}</Layout>;
};
