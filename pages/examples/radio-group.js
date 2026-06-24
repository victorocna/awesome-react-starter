import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import { Label } from '@components/ui/label';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Radio Group</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Single selection list options.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/radio-group">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <RadioGroup defaultValue="choice-one">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="choice-one" id="cg-1" />
                <Label htmlFor="cg-1">Choice One</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="choice-two" id="cg-2" />
                <Label htmlFor="cg-2">Choice Two</Label>
              </div>
            </RadioGroup>
    
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
  return <Layout title="Radio Group">{page}</Layout>;
};
