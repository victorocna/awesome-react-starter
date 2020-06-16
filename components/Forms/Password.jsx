import { useState } from 'react';

const Password = ({ name, ...props }) => {
  const [showPassword, toggle] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const action = showPassword ? 'far fa-eye' : 'far fa-eye-slash';

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className="w-full p-2 rounded-lg border border-gray-400 focus:border-gray-800 transition duration-500"
        {...props}
      />
      <button
        type="button"
        className="absolute right-0 p-2 outline-none"
        onClick={() => toggle(!showPassword)}
      >
        <i className={action}></i>
      </button>
    </div>
  );
};

export default Password;
