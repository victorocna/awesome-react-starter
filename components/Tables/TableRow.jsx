import React from 'react';

const TableRow = ({ row }) => {
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell) => {
        return (
          <td key={cell} className="px-4 py-2 group" {...cell.getCellProps()}>
            {cell.render('Cell')}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
