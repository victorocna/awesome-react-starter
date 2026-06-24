import { withAuth } from '@auth';
import { Layout, NoSsr } from '@components';
import { Documentation } from '@examples/components';
import { MultiStepForm } from '@examples/components/Multistep';

const Page = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        <NoSsr>
          <MultiStepForm />
        </NoSsr>
        <Documentation />
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

export default withAuth(Page);


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Complex multi step form">{page}</Layout>;
};
