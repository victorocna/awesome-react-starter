import { Trim } from "@components";

const TrimCell = ({ column, row: { original } }) => {
  if (!original) {
    return '';
  }

  return <Trim column={column} value={original} />;
};

export default TrimCell;
