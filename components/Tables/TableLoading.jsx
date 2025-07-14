import { Bone } from '@components';
import { TableHeader } from '@components/Tables';
import { useTable } from '@hooks';
import { bogus } from '@lib';

const TableLoading = ({ name, columns }) => {
  const table = useTable({ columns });

  const items = bogus.make(name);
  const showRows = (item, i) => {
    return (
      <tr key={`${name}-${i}`}>
        {table.getAllLeafColumns().map((column, j) => (
          <td key={`${name}-${i}-${j}`} className="whitespace-nowrap p-4">
            <Bone type="pending" extraClass={column?.extraClass} />
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

export default TableLoading;
