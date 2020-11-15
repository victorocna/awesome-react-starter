import React from 'react';

const Select = ({ children, ...props }) => (
  <select className="form-select w-full" {...props}>
    {children}
  </select>
);

export default Select;
