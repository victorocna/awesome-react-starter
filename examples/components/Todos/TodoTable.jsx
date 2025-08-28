import { LoadMoreOnClick } from '@components/Buttons';
import { TableColumns, TableError, TableLoading, TableSuccess } from '@components/Tables';
import { todoColumns } from '@examples/data';
import { useInfiniteQuery } from '@hooks';

const TodoTable = ({ options }) => {
  const { data, status, ...props } = useInfiniteQuery('admin/todos', options);

  return (
    <>
      <TableColumns pageParams={data?.pageParams} />

      {status === 'pending' && <TableLoading name="todos" columns={todoColumns} />}
      {status === 'error' && <TableError name="todos" columns={todoColumns} />}
      {status === 'success' && (
        <>
          <TableSuccess name="todos" columns={todoColumns} data={data} />
          <div className="px-4 sm:p-4">
            <LoadMoreOnClick {...props} />
          </div>
        </>
      )}
    </>
  );
};

export default TodoTable;
