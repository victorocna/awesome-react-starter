import { withAuth } from '@auth';
import { Layout } from '@components';
import TodoTable from '@examples/components/Todos/TodoTable';

const Page = () => {
  return (
    <Layout title="To Do Table">
      <div className="flex w-full flex-col overflow-x-auto rounded-lg bg-white pb-0 shadow">
        <TodoTable />
      </div>
    </Layout>
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
