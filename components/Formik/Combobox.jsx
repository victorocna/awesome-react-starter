import { Combobox as ComboboxField } from '@components/Fields';
import { useFormikContext } from 'formik';
import { get } from 'lodash';

const Combobox = ({ children, name, ...props }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleSelect = (value) => {
    setFieldValue(name, value);
  };

  return (
    <ComboboxField defaultSelected={get(values, name)} onSelect={handleSelect} {...props}>
      {children}
    </ComboboxField>
  );
};

export default Combobox;
