import { Layout } from '@components';
import Link from 'next/link';
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from '@components/ui/item';
import { Button } from '@components/ui/button';
import { User } from 'lucide-react';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Item List Layout</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A layout pattern to map lists with media/content/actions.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/item">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <ItemGroup className="max-w-md">
              <Item variant="muted">
                <ItemMedia variant="icon">
                  <User className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Arthur Dent</ItemTitle>
                  <ItemDescription>Galactic traveler, tea enthusiast.</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="xs" variant="ghost">Edit</Button>
                </ItemActions>
              </Item>
            </ItemGroup>
    
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
  return <Layout title="Item List Layout">{page}</Layout>;
};
