import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@components/ui/button-group';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Button Group</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Groups a series of buttons together on a single line.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/button">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <ButtonGroup>
              <Button variant="outline">One</Button>
              <ButtonGroupSeparator />
              <Button variant="outline">Two</Button>
              <ButtonGroupSeparator />
              <Button variant="outline">Three</Button>
              <ButtonGroupSeparator />
              <ButtonGroupText>Addon</ButtonGroupText>
            </ButtonGroup>
    
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
  return <Layout title="Button Group">{page}</Layout>;
};
