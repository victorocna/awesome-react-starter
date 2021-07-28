import numeral from 'numeral';

const Price = ({ value, ...props }) => {
  return (
    <h3 className="font-medium" {...props}>
      {numeral(value).format('0,0.00') || 'N/A'}
    </h3>
  );
};

export default Price;
