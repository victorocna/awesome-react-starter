import { Bone } from '@components';
import { TableHeader } from '@components/Tables';
import { bogus, toaster } from '@lib';
import { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';

const TableError = ({ name, columns }) => {
  useEffect(() => {
    toaster.error('Error! Could not load data');
  }, []);

  const options = {
    columns: useMemo(() => columns, []),
    data: useMemo(() => [], []),
  };
  const table = useTable(options);

  const items = bogus.make(name);
  const showRows = (item, i) => {
    return (
      <tr key={`${name}-${i}`}>
        {table.visibleColumns.map((column, j) => (
          <td key={`${name}-${i}-${j}`} className="whitespace-nowrap p-4">
            <Bone type="error" extraClass={column?.extraClass} />
          </td>
        ))}
      </tr>
    );
  };

  return (
    <table className="w-full border-collapse" {...table.getTableProps()}>
      <TableHeader headers={table.visibleColumns} />
      <tbody
        className="divide-y whitespace-nowrap text-sm text-gray-500"
        {...table.getTableBodyProps()}
      >
        {items.map(showRows)}
      </tbody>
    </table>
  );
};

export default TableError;
