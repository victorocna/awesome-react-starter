import { classnames } from '@lib';
import { flexRender } from '@tanstack/react-table';

const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-100">
      <tr className="border-b text-xs text-primary">
        {headers.map((column) => (
          <th key={column.id} className={classnames('whitespace-nowrap p-4', column?.extraClass)}>
            {flexRender(column.columnDef.header, {})}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
