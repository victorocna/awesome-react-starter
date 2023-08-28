import { withAuth } from '@auth';
import { Menu, MenuButton } from '@components';
import TodoTable from '@examples/components/Todos/TodoTable';

const Page = () => (
  <div className="flex min-h-screen bg-gray-100 font-body text-sm">
    <Menu />
    <main className="max w-full p-4 lg:col-span-5 lg:p-8 xl:px-12">
      <div className="mb-12 flex items-center">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">To Do Table</h3>
        </div>
        <MenuButton />
      </div>
      <div className="flex w-full flex-col overflow-x-auto rounded-lg bg-white pb-0 shadow">
        <TodoTable />
      </div>
    </main>
  </div>
);

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
