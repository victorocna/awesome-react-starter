const Email = (props) => {
  return (
    <input type="email" inputMode="email" className="input" autoComplete="username" {...props} />
  );
};

export default Email;
