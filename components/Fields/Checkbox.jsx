import React from 'react';

const Checkbox = ({ children, ...props }) => {
  return (
    <label className="flex items-center gap-1 mb-0">
      <input type="checkbox" className="form-checkbox p-2 cursor-pointer" {...props} />
      <div>{children}</div>
    </label>
  );
};

export default Checkbox;
