import { Bone } from '@components';
import { TableHeader } from '@components/Tables';
import { bogus, toaster } from '@lib';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo } from 'react';

const TableError = ({ name, columns }) => {
  useEffect(() => {
    toaster.error('Error! Could not load data');
  }, []);

  const table = useReactTable({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => [], []),
    getCoreRowModel: getCoreRowModel(),
  });

  const items = bogus.make(name);
  const showRows = (item, i) => {
    return (
      <tr key={`${name}-${i}`}>
        {table.getAllLeafColumns().map((column, j) => (
          <td key={`${name}-${i}-${j}`} className="whitespace-nowrap p-4">
            <Bone type="error" extraClass={column?.extraClass} />
          </td>
        ))}
      </tr>
    );
  };

  return (
    <table className="w-full border-collapse">
      <TableHeader headers={table.getAllLeafColumns()} />
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {items.map(showRows)}
      </tbody>
    </table>
  );
};

export default TableError;
