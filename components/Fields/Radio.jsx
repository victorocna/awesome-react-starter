import { useContext } from 'react';
import { RadioContext } from '.';

const Radio = ({ children, ...props }) => {
  const { name, selectedValue, onChange } = useContext(RadioContext);
  props.defaultChecked = props.value === selectedValue;

  // add context values to props
  props.name = name;
  props.onChange = onChange;

  return (
      <div class="mt-2 ">
        <label class="inline-flex items-center ">
          <input  type="radio" role="radio" class="radio" {...props} />
          <span class="ml-2">{children}</span>
        </label>
      </div>
  );
};

export default Radio;
