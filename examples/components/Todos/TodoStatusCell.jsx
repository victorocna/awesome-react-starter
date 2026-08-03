import { Pill } from '@components';

/**
 * Renders the status cell in the todo table as a colored Pill badge.
 *
 * @param {Object} info Table cell info object from react-table
 * @returns {React.ReactNode}
 */
const TodoStatusCell = (info) => {
  const value = info.getValue();

  return (
    <div className="h-8 py-1">
      {value ? (
        <Pill className="bg-emerald-100 text-emerald-800">Completed</Pill>
      ) : (
        <Pill className="bg-rose-100 text-rose-800">Pending</Pill>
      )}
    </div>
  );
};

export default TodoStatusCell;

