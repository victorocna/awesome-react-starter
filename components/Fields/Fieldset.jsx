import React from 'react';

const Fieldset = ({ label, help, children }) => {
  return (
    <fieldset>
      <label className="w-full cursor-pointer mb-0">
        {label}
        {children}
      </label>
      {help && <div className="text-gray-700 text-sm">{help}</div>}
    </fieldset>
  );
};

export default Fieldset;
