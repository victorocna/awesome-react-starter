import { TableHeader, TableRow } from '@components/Tables';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { isEmpty, size } from 'lodash';
import { useMemo } from 'react';

const TableSuccess = ({ name, columns, data, dataUpdatedAt }) => {
  const pages = data.pages.flat();

  const table = useReactTable({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => pages, [dataUpdatedAt]),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full table-auto border-collapse">
      <TableHeader headers={table.getAllLeafColumns()} />
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {table.getRowModel().rows.map((row, i) => (
          <TableRow key={`${name}-row-${i}`} row={row} />
        ))}
        {isEmpty(table.getRowModel().rows) && (
          <tr>
            <td className="p-4" colSpan={size(columns)}>
              Nothing to show
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableSuccess;
