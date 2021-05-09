import React from 'react';

const Select = ({ children, placeholder, ...props }) => {
  return (
    <div className="form-select flex items-center w-full">
      <select className="w-full pr-4" {...props}>
        {placeholder && (
          <option value="" hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <div className="-ml-6">
        <i className="fa fa-chevron-down" />
      </div>
    </div>
  );
};

export default Select;
