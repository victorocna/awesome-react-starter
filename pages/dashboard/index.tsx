import { Layout } from '@components';
import { ChartAreaInteractive } from '@components/chart-area-interactive';
import { SectionCards } from '@components/section-cards';

/**
 * Dashboard landing page.
 * Displays the metrics overview cards and interactive area chart.
 * 
 * @returns {React.ReactElement} The rendered dashboard page.
 */
export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}

/**
 * Attaches the default sidebar layout to the Dashboard page.
 * 
 * @param {React.ReactNode} page - The active page component.
 * @returns {React.ReactElement} The page wrapped in the standard layout.
 */
Page.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title="Dashboard">{page}</Layout>;
};
