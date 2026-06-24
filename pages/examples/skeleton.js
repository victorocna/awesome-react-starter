import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Skeleton } from '@components/ui/skeleton';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Skeleton</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Placeholder loading card layouts.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/skeleton">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex items-center gap-4 max-w-sm">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-3 w-3/4 rounded" />
                <Skeleton className="h-3 w-1/2 rounded" />
              </div>
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
  return <Layout title="Skeleton">{page}</Layout>;
};
