import React from 'react';

const Select = ({ children, placeholder, ...props }) => (
  <select className="form-select w-full" {...props}>
    {placeholder && (
      <option value="" hidden>
        {placeholder}
      </option>
    )}
    {children}
  </select>
);

export default Select;
