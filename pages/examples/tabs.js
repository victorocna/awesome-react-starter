import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/ui/tabs';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Tabs</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Multi-tab panel grids for toggle layout panels.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/tabs">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Tabs defaultValue="account" className="max-w-md">
              <TabsList>
                <TabsTrigger value="account">General Info</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 border rounded-lg mt-2 bg-muted/5">
                General details summary configuration.
              </TabsContent>
              <TabsContent value="security" className="p-4 border rounded-lg mt-2 bg-muted/5">
                Passwords key rotation triggers.
              </TabsContent>
            </Tabs>
    
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
  return <Layout title="Tabs">{page}</Layout>;
};
