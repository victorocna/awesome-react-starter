import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Checkbox</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A control that allows the user to toggle between checked and unchecked states.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/checkbox">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="flex items-center gap-2">
              <Checkbox id="terms-accept" />
              <Label htmlFor="terms-accept" className="cursor-pointer">
                I agree to the terms of service and conditions
              </Label>
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
  return <Layout title="Checkbox">{page}</Layout>;
};
