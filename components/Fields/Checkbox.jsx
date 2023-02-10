import React from 'react';

const Checkbox = ({ children, ...props }) => {
  return (
    <div className="mt-2">
      <label className="inline-flex items-center ">
        <input type="checkbox" className="checkbox" {...props} />
        <span className="ml-2">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
