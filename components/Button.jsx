import React from 'react';

const Button = ({ className, variant, children, ...props }) => {
  const classes = ['border-2 py-1 px-4 rounded shadow text-sm'];

  switch (variant) {
    case 'danger':
      classes.push('border-red-700 text-red-700 hover:bg-red-700 hover:text-white');
      break;
    case 'outline':
      classes.push('border-indigo-700 hover:bg-indigo-800 hover:text-white');
      break;
    default:
      classes.push('border-indigo-700 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold');
      break;
  }

  // add component specific classes
  if (className) {
    classes.push(className);
  }

  return (
    <button type="button" className={classes.join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
