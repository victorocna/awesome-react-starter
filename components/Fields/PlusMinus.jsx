import { useEffect, useState } from 'react';

const PlusMinus = ({ handleChange, max = null, min = 0, value: initialValue }) => {
  const [value, setValue] = useState(initialValue || 0);

  const incrementValue = () => {
    if (max && Number(value) >= max) {
      return;
    }
    setValue(Number(value) + 1);
  };

  const decrementValue = () => {
    if (Number(value) > min) {
      setValue(Number(value) - 1);
    }
  };

  useEffect(() => {
    if (typeof handleChange === 'function') {
      handleChange(value);
    }
  }, [value]);

  return (
    <div className="plusminus">
      <button type="button" className="px-3 py-2" onClick={decrementValue}>
        <i className="fas fa-minus"></i>
      </button>
      <div className="w-14 cursor-default border-x border-neutral-300 px-3 py-2">{value}</div>
      <button type="button" className="px-3 py-2" onClick={incrementValue}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default PlusMinus;
