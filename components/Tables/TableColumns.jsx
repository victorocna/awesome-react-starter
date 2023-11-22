import { safeNumber } from '@functions';

const TableColumns = ({ pageParams }) => {
  const count = safeNumber(pageParams?.count);

  return (
    <section className="flex items-center justify-between p-4">
      <div className="flex gap-1 text-gray-600">
        <p>Results found:</p>
        <strong>{count}</strong>
      </div>
    </section>
  );
};

export default TableColumns;
