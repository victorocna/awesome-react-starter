import { classnames } from '@lib';
import { useState } from 'react';

const Toggle = ({ label = 'Toggle me', initialState = false, onToggle, disabled, extraClass }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleChange = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      if (onToggle) {
        onToggle(newState);
      }
    }
  };

  return (
    <label
      className={classnames(
        'inline-flex cursor-pointer items-center',
        disabled && 'cursor-not-allowed opacity-50'
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="peer sr-only"
        disabled={disabled}
      />
      <div
        className={classnames(
          'peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600',
          "after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white",
          'after:absolute after:start-[2px] after:top-[2px] after:border-gray-300 after:bg-white',
          'after:h-5 after:w-5 after:rounded-full after:border after:transition-all',
          extraClass
        )}
      />
      <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
    </label>
  );
};

export default Toggle;
