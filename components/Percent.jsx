import { formatNumber } from 'accounting';

const Percent = ({ value, precision = 0 }) => {
  return (
    <h3 data-type="number">
      {formatNumber(value / 100, { decimal: ',', thousand: '.', precision }) || 'N/A'}%
    </h3>
  );
};

export default Percent;
