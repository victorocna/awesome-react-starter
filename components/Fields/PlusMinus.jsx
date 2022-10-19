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
    <div className="flex items-center">
      <button
        className="flex justify-center items-center w-10 border h-10 rounded-none bg-white rounded-l-md"
        onClick={decrementValue}
      >
        <i className="fas fa-minus"></i>
      </button>
      <div className="w-16 flex flex-col justify-center text-center border form-input h-10 rounded-none cursor-default">
        {value}
      </div>
      <button
        className="flex justify-center items-center w-10 border h-10 rounded-none bg-white rounded-r-md"
        onClick={incrementValue}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default PlusMinus;
