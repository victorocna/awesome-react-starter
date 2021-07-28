import numeral from 'numeral';

const Percent = ({ value, ...props }) => {
  return (
    <h3 className="font-medium" {...props}>
      {numeral(value / 100).format('0%') || 'N/A'}
    </h3>
  );
};

export default Percent;
