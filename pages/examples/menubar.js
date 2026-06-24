import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@components/ui/menubar';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Menubar</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Horizontal top bar menu layout lists.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/menubar">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Menubar className="border rounded-md px-1 py-1 w-fit">
              <MenubarMenu>
                <MenubarTrigger className="px-2.5 py-1 text-xs">File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="px-2.5 py-1 text-xs">Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
    
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
  return <Layout title="Menubar">{page}</Layout>;
};
