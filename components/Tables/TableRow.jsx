import { flexRender } from '@tanstack/react-table';
import { memo } from 'react';

const TableRow = ({ row }) => {
  const cells = row.getVisibleCells();
  return (
    <tr>
      {cells.map((cell) => {
        return (
          <td key={cell.id} className="group px-4 py-2">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default memo(TableRow);
