import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Calendar</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  A date picker calendar component that allows selecting dates.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/calendar">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <Calendar mode="single" className="rounded-md border max-w-sm" />
    
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
  return <Layout title="Calendar">{page}</Layout>;
};
