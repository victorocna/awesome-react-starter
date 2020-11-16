import React from 'react';

const Checkbox = ({ label, value, ...props }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="form-checkbox p-2 cursor-pointer"
      defaultChecked={value}
      {...props}
    />
    {label}
  </div>
);

export default Checkbox;
