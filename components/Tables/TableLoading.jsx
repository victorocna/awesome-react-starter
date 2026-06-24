import { TableHeader } from '@components/Tables';
import { Skeleton } from '@components/ui/skeleton';
import { useTable } from '@hooks';
import { bogus } from '@lib';
import { cn } from '@lib/utils';

const TableLoading = ({ name, columns }) => {
  const table = useTable({ columns });

  const items = bogus.make(name);
  const showRows = (item, i) => {
    return (
      <tr key={`${name}-${i}`}>
        {table.getAllLeafColumns().map((column, j) => (
          <td key={`${name}-${i}-${j}`} className="whitespace-nowrap p-4">
            <Skeleton className={cn('w-full', column?.extraClass)} />
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
