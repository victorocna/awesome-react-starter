import { Layout } from '@components';
import Link from 'next/link';
import { Popover, PopoverTrigger, PopoverContent } from '@components/ui/popover';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Popover</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Floating content cards displaying configs over buttons.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/popover">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-sm">Configure Port</h4>
                  <p className="text-xs text-muted-foreground">Update host interface address</p>
                  <Input size="xs" defaultValue="8080" />
                </div>
              </PopoverContent>
            </Popover>
    
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
  return <Layout title="Popover">{page}</Layout>;
};
