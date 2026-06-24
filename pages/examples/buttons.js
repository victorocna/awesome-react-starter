import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Settings, ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Buttons</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Displays a button or a component that looks like a button.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/button">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Settings"><Settings className="size-4" /></Button>
                <Button>
                  Next <ArrowRight data-icon="inline-end" />
                </Button>
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
  return <Layout title="Buttons">{page}</Layout>;
};
