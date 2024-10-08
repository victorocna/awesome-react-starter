import { DateRange } from '@components';
import { Layout } from '@examples/components';
import { subDays } from 'date-fns';

const Page = () => {
  const handleChange = ({ from, to }) => {
    alert(`From: ${from}, To: ${to}`);
  };

  //Create a fiew ranges for some random dates
  const customRange = [
    {
      label: 'Last 7 days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        endDate: new Date(),
      }),
      isSelected() {
        return false;
      },
    },
    {
      label: 'Last 30 days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
        endDate: new Date(),
      }),
      isSelected() {
        return false;
      },
    },
    {
      label: 'Last 90 days',
      range: () => ({
        startDate: new Date(new Date().setDate(new Date().getDate() - 90)),
        endDate: new Date(),
      }),
      isSelected() {
        return false;
      },
    },
  ];

  const start = subDays(new Date(), 7);
  const end = new Date();

  return (
    <Layout title="Date Range">
      <div class="prose-sm">
        <div class="not-prose">
          <h3 className="mt-0">Example #1</h3>
          <p className="mb-1">Date range with custom onChange logic</p>
          <DateRange onChange={handleChange} />
        </div>
        <div class="not-prose">
          <h3 className="mt-0">Example #2</h3>
          <p className="mb-1">Date range with a custom range</p>
          <DateRange customRange={customRange} />
        </div>
        <div class="not-prose">
          <h3 className="mt-0">Example #3</h3>
          <p className="mb-1">
            Date range with custom start and end (start: 7 days ago, end: today)
          </p>
          <DateRange start={start} end={end} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
