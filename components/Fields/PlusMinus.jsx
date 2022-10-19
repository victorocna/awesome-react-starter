import { useEffect, useState } from 'react';

const PlusMinus = ({ handleChange, max = null, min = 0, value: initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue || 0);

  const incrementValue = () => {
    if (max && Number(value) >= max) return;
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
    <div className="flex items-center box-border w-40">
      <div
        className="flex justify-center items-center w-10 border form-input rounded-none bg-white rounded-l-md cursor-pointer select-none"
        onClick={decrementValue}
      >
        -
      </div>
      <input
        className="border form-input rounded-none disabled:bg-white disabled:cursor-not-allowed"
        disabled
        type="text"
        value={value}
        {...props}
      />
      <div
        className="flex justify-center items-center w-10 border form-input rounded-none bg-white rounded-r-md cursor-pointer select-none"
        onClick={incrementValue}
      >
        +
      </div>
    </div>
  );
};

export default PlusMinus;
