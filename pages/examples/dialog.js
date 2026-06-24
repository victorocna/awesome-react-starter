import { Layout } from '@components';
import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Dialog</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A modal overlay dialog component for critical alerts or user inputs.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/dialog">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile Details</DialogTitle>
                  <DialogDescription>Update your login username or handle details here.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 py-2">
                  <Label htmlFor="dlg-username">Username</Label>
                  <Input id="dlg-username" defaultValue="johndoe" />
                </div>
                <DialogFooter showCloseButton>
                  <Button>Save Settings</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
    
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
  return <Layout title="Dialog">{page}</Layout>;
};
