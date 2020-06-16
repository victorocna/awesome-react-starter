const Checkbox = ({ label, ...props }) => {
  return (
    <div className="flex flex-wrap items-center">
      <input type="checkbox" defaultChecked={props.value} className="form-checkbox" {...props} />
      {label}
    </div>
  );
};

export default Checkbox;
