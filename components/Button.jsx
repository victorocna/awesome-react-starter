export default function Button({ className, variant, children, ...props }) {
  let classes = 'border-2 py-1 px-4 rounded shadow text-sm';
  switch (variant) {
    case 'danger':
      classes += ' border-red-700 text-red-700 hover:bg-red-700 hover:text-white';
      break;
    case 'outline':
      classes += ' border-indigo-700 hover:bg-indigo-800 hover:text-white';
      break;
    default:
      classes += ' border-indigo-700 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold';
      break;
  }

  // add component specific classes
  if (className) {
    classes += ' ' + className;
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
