import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@components/ui/command';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Command</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Fast, keyboard-friendly command search palettes.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/command">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="max-w-md border rounded-xl shadow-sm overflow-hidden bg-popover">
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>Profile Settings</CommandItem>
                    <CommandItem>Billing Setup</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
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
  return <Layout title="Command">{page}</Layout>;
};
