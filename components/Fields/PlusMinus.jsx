import { isFunction } from 'lodash';
import { useEffect, useState } from 'react';

const PlusMinus = ({ id, onChange, max = null, min = 0, value: initialValue }) => {
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
    if (isFunction(onChange)) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <div className="plusminus">
      <button type="button" className="px-3 py-2" onClick={decrementValue}>
        <i className="fas fa-minus"></i>
      </button>
      <input
        type="number"
        id={id}
        className="w-14 cursor-default border-x border-neutral-300 px-3 py-2 text-center"
        value={value}
        readOnly
        tabIndex={-1}
      />
      <button type="button" className="px-3 py-2" onClick={incrementValue}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default PlusMinus;
