import { Layout } from '@components';
import { Preview } from '@examples/components';
import { IconsStats, SimpleStats, TrendingStats } from '@examples/components/Stats';

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <p className="max-w-3xl text-base text-gray-800">
          Use these Tailwind CSS description list components to present detailed information in a
          structured and readable format. These components are designed and built by the Tailwind
          CSS team, and include a variety of different styles and layouts.
        </p>
        <Preview title="With trending">
          <TrendingStats />
        </Preview>
        <Preview type="card" title="Simple in cards">
          <SimpleStats />
        </Preview>
        <Preview type="card" title="With brand icon">
          <IconsStats />
        </Preview>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Stats">{page}</Layout>;
};
