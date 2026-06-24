import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Textarea } from '@components/ui/textarea';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Textarea</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Multiline text input field.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/textarea">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="max-w-md">
              <Textarea placeholder="Type description details here..." rows={4} />
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
  return <Layout title="Textarea">{page}</Layout>;
};
