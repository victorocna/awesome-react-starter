import { useState } from 'react';
import { Button } from '.';
import { classnames } from '@lib';

const Tabs = ({ options, callback, extraContainerClass, extraOptionClass }) => {  
  const defaultOption = options.find((option) => option.default) || options[0];
  const [selectedValue, setSelectedValue] = useState(defaultOption.value);

  const handleButtonClick = (value) => {
    setSelectedValue(value);

    if (typeof callback === 'function') {
      callback(value);
    }
  };

  return (
    <div
      className={classnames(
        'flex gap-3 border-b-2 border-grey-500 text-lg overflow-auto overflow-y-hidden',
        extraContainerClass
      )}
    >
      {options.map(({ value, disabled, label }) => (
        <Button
          key={value}
          className={classnames(
            'py-3 px-5',
            selectedValue === value
              ? 'border-b-2 border-gray-600 text-gray-800 font-medium'
              : 'text-gray-600',
            extraOptionClass
          )}
          onClick={() => handleButtonClick(value)}
          disabled={disabled}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
