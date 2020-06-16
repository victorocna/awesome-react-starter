export default function Button({ className, variant, children, ...props }) {
  let classes = 'border-2 py-1 px-3 rounded-full';
  switch (variant) {
    case 'danger':
      classes += ' border-red-700 text-red-700 hover:bg-red-700 hover:text-white text-sm';
      break;
    case 'outline':
      classes += ' border-indigo-700 hover:bg-indigo-800 hover:text-white text-sm';
      break;
    default:
      classes += ' border-indigo-700 bg-indigo-700 hover:bg-indigo-800 text-white text-sm';
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
