import { useContext } from 'react';
import RadioContext from './RadioContext';

const Radio = ({ children, ...props }) => {
  const { name, selectedValue, onChange } = useContext(RadioContext);
  props.defaultChecked = props.value === selectedValue;

  // add context values to props
  props.name = name;
  props.onChange = onChange;

  return (
    <div className="mt-2 ">
      <label className="inline-flex items-center ">
        <input type="radio" role="radio" className="radio" {...props} />
        <span className="ml-2">{children}</span>
      </label>
    </div>
  );
};

export default Radio;
