import { classnames } from '@lib';

const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-100">
      <tr className="border-b text-xs text-primary">
        {headers.map((column) => (
          <th
            key={column.Header}
            className={classnames('whitespace-nowrap p-4', column?.extraClass)}
          >
            {column.render('Header')}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
