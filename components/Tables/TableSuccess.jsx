import { TableHeader, TableRow } from '@components/Tables';
import { isEmpty, size } from 'lodash';
import { useMemo } from 'react';
import { useTable } from 'react-table';

const TableSuccess = ({ name, columns, data, dataUpdatedAt }) => {
  const pages = data.pages.flat();
  const options = {
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => pages, [dataUpdatedAt]),
  };
  const table = useTable(options);

  return (
    <table className="w-full table-auto border-collapse" {...table.getTableProps()}>
      <TableHeader headers={table.visibleColumns} />
      <tbody
        className="divide-y whitespace-nowrap text-sm text-gray-500"
        {...table.getTableBodyProps()}
      >
        {table.rows.map((row, i) => {
          table.prepareRow(row);
          return <TableRow key={`${name}-row-${i}`} row={row} />;
        })}
        {isEmpty(table.rows) && (
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
