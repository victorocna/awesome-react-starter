import { LoadMoreOnClick } from '@components/Buttons';
import { TableColumns, TableError, TableLoading, TableSuccess } from '@components/Tables';
import { todoColumns } from '@examples/data';
import { useInfiniteQuery } from '@hooks';

const TodoTable = ({ options }) => {
  // Query the API for data with a long loading state for demonstration purposes
  const { data, status, ...props } = useInfiniteQuery('admin/todos?test=loading', options);

  return (
    <>
      <TableColumns pageParams={data?.pageParams} />

      {status === 'loading' && <TableLoading name="staff" columns={todoColumns} />}
      {status === 'error' && <TableError name="staff" columns={todoColumns} />}
      {status === 'success' && (
        <>
          <TableSuccess name="staff" columns={todoColumns} data={data} {...props} />
          <div className="px-4 sm:p-4">
            <LoadMoreOnClick {...props} />
          </div>
        </>
      )}
    </>
  );
};

export default TodoTable;
