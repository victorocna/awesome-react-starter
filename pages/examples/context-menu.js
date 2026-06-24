import { Layout } from '@components';
import { Button } from '@components/ui/button';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@components/ui/context-menu';
import Link from 'next/link';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Context Menu</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Displays a menu triggered by a right-click action.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/context-menu">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              <ContextMenu>
                <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
                  <span className="hidden pointer-fine:inline-block">Right click here</span>
                  <span className="hidden pointer-coarse:inline-block">Long press here</span>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-48">
                  <ContextMenuGroup>
                    <ContextMenuItem>
                      Back
                      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem disabled>
                      Forward
                      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Reload
                      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-44">
                        <ContextMenuGroup>
                          <ContextMenuItem>Save Page...</ContextMenuItem>
                          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                          <ContextMenuItem>Name Window...</ContextMenuItem>
                        </ContextMenuGroup>
                        <ContextMenuSeparator />
                        <ContextMenuGroup>
                          <ContextMenuItem>Developer Tools</ContextMenuItem>
                        </ContextMenuGroup>
                        <ContextMenuSeparator />
                        <ContextMenuGroup>
                          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
                        </ContextMenuGroup>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuRadioGroup value="pedro">
                      <ContextMenuLabel>People</ContextMenuLabel>
                      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuGroup>
                </ContextMenuContent>
              </ContextMenu>
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
  return <Layout title="Context Menu">{page}</Layout>;
};
