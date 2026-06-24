import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { ChartContainer } from '@components/ui/chart';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Chart</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Custom charts wrapped inside the native ChartContainer component.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/chart">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            {(() => {
              const [isMounted, setIsMounted] = useState(false);
              useEffect(() => { setIsMounted(true); }, []);
              if (!isMounted) return <p>Loading chart...</p>;
              
              const config = { desktop: { label: "Desktop", color: "var(--primary)" } };
              const data = [
                { month: "Jan", desktop: 186 },
                { month: "Feb", desktop: 305 },
                { month: "Mar", desktop: 237 },
                { month: "Apr", desktop: 73 }
              ];
              return (
                <div className="h-64 max-w-md">
                  <ChartContainer config={config} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                        <Bar dataKey="desktop" fill="var(--primary)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              );
            })()}
    
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
  return <Layout title="Chart">{page}</Layout>;
};
