import { cn } from '@lib/utils';

const Trim = ({ extraClass, value }) => {
  if (!value) {
    return '';
  }

  const format = (value, limit = 50) => {
    if (value.length < limit) {
      return value;
    }
    return (
      <>
        <span>{value.substring(0, limit)}</span>
        <span>...</span>
      </>
    );
  };

  return (
    <div
      className={cn('cursor-default overflow-x-auto whitespace-nowrap', extraClass)}
      title={value}
    >
      {format(value)}
    </div>
  );
};

export default Trim;
