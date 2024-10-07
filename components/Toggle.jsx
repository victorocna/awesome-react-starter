import { useState } from 'react';

const Toggle = ({ label = 'Toggle me', initialState = false, onToggle, disabled }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleChange = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      if (onToggle) {
        onToggle(newState); // Trigger onToggle callback
      }
    }
  };

  return (
    <label
      className={`inline-flex items-center cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only peer"
        disabled={disabled}
      />
      <div
        className={`relative w-11 h-6 ${
          disabled ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-200 peer-checked:bg-blue-600'
        } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full`}
      >
        <div
          className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white border transition-transform ${
            isChecked ? 'translate-x-full' : ''
          } ${disabled ? 'bg-gray-400' : ''}`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Toggle;
