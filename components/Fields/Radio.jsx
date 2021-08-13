import { useContext } from 'react';
import { RadioContext } from '.';

const Radio = ({ children, ...props }) => {
  const context = useContext(RadioContext);
  props.checked = props.value === context.selectedValue;

  return (
    <label className="inline-flex items-center relative cursor-pointer space-x-1 mr-2 max-w-full">
      <input type="radio" role="radio" className="form-radio" {...props} {...context} />
      <span className="min-w-14 inline-block text-center truncate">{children}</span>
    </label>
  );
};

export default Radio;
