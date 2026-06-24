import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Spinner } from '@components/ui/spinner';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Spinner</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Inline loading spinner element.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/spinner">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex items-center gap-3">
              <Spinner />
              <span className="text-sm text-muted-foreground">Running processes...</span>
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
  return <Layout title="Spinner">{page}</Layout>;
};
