import { Layout } from '@components';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/ui/card';
import { Button } from '@components/ui/button';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Card</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Displays a card with header, content, and footer.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/card">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>User Authentication</CardTitle>
                <CardDescription>Configure your secure key setup for external APIs.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ensure you store this key in a secure environment file. Never commit it to git repositories or expose it inside client scripts.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Revoke</Button>
                <Button>Generate Key</Button>
              </CardFooter>
            </Card>
    
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
  return <Layout title="Card">{page}</Layout>;
};
