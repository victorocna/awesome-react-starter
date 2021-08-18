import React, { useState } from 'react';

const Password = (props) => {
  const [showPassword, toggle] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const action = showPassword ? 'far fa-eye' : 'far fa-eye-slash';

  return (
    <div className="relative">
      <input type={type} className="form-input" {...props} />
      <button
        type="button"
        className="absolute right-0 p-2 outline-none"
        onClick={() => toggle(!showPassword)}
        tabIndex="-1"
      >
        <i className={action}></i>
      </button>
    </div>
  );
};

export default Password;
