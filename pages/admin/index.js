import { checkAuth, withAuth } from '@auth';
import { Layout } from '@components';

/**
 * Page component for the secure admin dashboard.
 *
 * @returns {React.ReactElement} The dashboard view.
 */
const Page = () => {
  return (
    <div className="prose max-w-full">
      <h2 className="mb-4 font-semibold">Hello world</h2>
      <p>This is a secured admin page. Modify it as you wish.</p>
    </div>
  );
};

/**
 * Attaches the default layout to the admin page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Dashboard">{page}</Layout>;
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
