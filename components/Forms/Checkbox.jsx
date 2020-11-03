import React from 'react';

const Checkbox = ({ label, ...props }) => {
  return (
    <div className="flex flex-wrap items-center">
      <input type="checkbox" className="form-checkbox p-2 cursor-pointer" {...props} />
      {label}
    </div>
  );
};

export default Checkbox;
