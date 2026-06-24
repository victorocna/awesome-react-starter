import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '@components/ui/combobox';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Combobox</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Autocomplete input with search filter capabilities.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/combobox">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="w-[200px]">
              <Combobox>
                <ComboboxInput showClear placeholder="Select framework..." />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxItem value="next">Next.js</ComboboxItem>
                    <ComboboxItem value="react">React</ComboboxItem>
                    <ComboboxItem value="vue">Vue</ComboboxItem>
                    <ComboboxItem value="angular">Angular</ComboboxItem>
                    <ComboboxEmpty>No results found.</ComboboxEmpty>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
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
  return <Layout title="Combobox">{page}</Layout>;
};
