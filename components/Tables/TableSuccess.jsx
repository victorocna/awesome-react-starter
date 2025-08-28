import { TableHeader, TableRow } from '@components/Tables';
import { useTable } from '@hooks';
import { isEmpty, size } from 'lodash';
import { useMemo } from 'react';

const TableSuccess = ({ name, columns, data }) => {
  const memoCols = useMemo(() => columns, [columns]);
  const memoRows = useMemo(() => data?.pages ?? [], [data?.pages]);

  const table = useTable({
    columns: memoCols,
    data: memoRows,
  });

  const tableRows = table.getRowModel().rows;

  return (
    <table className="w-full table-auto border-collapse">
      <TableHeader headers={table.getAllLeafColumns()} />
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {tableRows.map((row, index) => (
          <TableRow key={`${name}-row-${index}`} row={row} />
        ))}
        {isEmpty(tableRows) && (
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
