import { withAuth } from '@auth';
import { Layout, Link } from '@components';
import { TodoFilters } from '@examples/components/Forms';
import TodoTable from '@examples/components/Todos/TodoTable';
import { useState } from 'react';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout title="To Do Table">
      <div className="flex flex-col rounded-lg border bg-white shadow">
        <div className="flex justify-between border-b p-4">
          <h3 className="text-base font-semibold md:text-xl lg:text-2xl">To Dos</h3>
          <Link href="#" className="button full primary no-underline">
            <i className="fas fa-plus-circle mr-2" />
            <span>Add new</span>
          </Link>
        </div>
        <div className="bg-gray-100 p-4">
          <TodoFilters setOptions={setOptions} />
        </div>
      </div>
      <div className="flex w-full flex-col overflow-x-auto rounded-lg bg-white pb-0 shadow">
        <TodoTable options={options} />
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
