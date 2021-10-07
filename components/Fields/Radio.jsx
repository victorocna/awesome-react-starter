import { useContext } from 'react';
import { RadioContext } from '.';

const Radio = ({ children, ...props }) => {
  const { name, selectedValue, onChange } = useContext(RadioContext);
  props.defaultChecked = props.value === selectedValue;

  // add context values to props
  props.name = name;
  props.onChange = onChange;

  return (
    <label className="inline-flex items-center relative cursor-pointer gap-1 mr-2 max-w-full">
      <input type="radio" role="radio" className="form-radio" {...props} />
      <span className="min-w-14 inline-block text-center truncate">{children}</span>
    </label>
  );
};

export default Radio;
