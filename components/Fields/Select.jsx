import React from 'react';

const Select = ({ children, placeholder, ...props }) => {
  return (
    <select className="select" {...props}>
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};

export default Select;
