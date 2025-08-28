import { formatNumber } from 'accounting';

const Price = ({ value, precision = 0 }) => {
  return (
    <h3 data-type="number">
      {formatNumber(value, { decimal: ',', thousand: '.', precision }) || 'N/A'}
    </h3>
  );
};

export default Price;
