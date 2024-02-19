import { Dropdown as DropdownField } from '@components/Fields';
import { useFormikContext } from 'formik';
import { get } from 'lodash';

const Dropdown = ({ children, name, ...props }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleSelect = (value) => {
    setFieldValue(name, value);
  };

  return (
    <DropdownField defaultSelected={get(values, name)} onSelect={handleSelect} {...props}>
      {children}
    </DropdownField>
  );
};

export default Dropdown;
