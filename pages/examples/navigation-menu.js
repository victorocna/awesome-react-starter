import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@components/ui/navigation-menu';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Navigation Menu</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Complex dropdown panel headers for web navigation layout grids.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/navigation-menu">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-1.5 rounded bg-muted">Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 bg-popover border rounded shadow-md mt-2 min-w-40 flex flex-col gap-2">
                    <NavigationMenuLink className="hover:underline cursor-pointer">Introduction</NavigationMenuLink>
                    <NavigationMenuLink className="hover:underline cursor-pointer">Installation</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
    
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
  return <Layout title="Navigation Menu">{page}</Layout>;
};
