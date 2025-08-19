import { flexRender } from '@tanstack/react-table';

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id} className="group px-4 py-2">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
