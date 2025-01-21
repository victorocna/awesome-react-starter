import { classnames } from '@lib';

const TrimCell = ({ column, row: { original } }) => {
  if (!original) {
    return '';
  }
  const { extraClass } = column;

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
      className={classnames('cursor-default overflow-x-auto whitespace-nowrap', extraClass)}
      title={original}
    >
      {format(original)}
    </div>
  );
};

export default TrimCell;
