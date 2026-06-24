import { Layout } from '@components';
import Link from 'next/link';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@components/ui/empty';
import { Button } from '@components/ui/button';
import { FileText } from 'lucide-react';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Empty State</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Visual banners highlighting missing resources or files.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/empty">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Empty className="max-w-md">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileText className="size-4" />
                </EmptyMedia>
                <EmptyTitle>No Files Recorded</EmptyTitle>
                <EmptyDescription>Click the button below to upload your project files.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="xs">Upload Now</Button>
              </EmptyContent>
            </Empty>
    
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
  return <Layout title="Empty State">{page}</Layout>;
};
