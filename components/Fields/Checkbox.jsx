import React from 'react';

const Checkbox = ({ children, ...props }) => {
  return (
      <div class="mt-2 ">
        <label class="inline-flex items-center ">
          <input type="checkbox" class="checkbox" {...props} />
          <span class="ml-2">{children}</span>
        </label>
      </div>
  );
};

export default Checkbox;
