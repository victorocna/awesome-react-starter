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
        'inline-flex items-center cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only peer"
        disabled={disabled}
      />
      <div
        className={classnames(
          'relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600',
          "peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']",
          'after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300',
          'after:border after:rounded-full after:h-5 after:w-5 after:transition-all',
          extraClass
        )}
      />
      <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
    </label>
  );
};

export default Toggle;
