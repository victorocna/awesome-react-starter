import { Trim } from '@components';

const TrimCell = ({ row }) => {
  return <Trim extraClass={row?.original?.extraClass} value={row?.original?.value} />;
};

export default TrimCell;
