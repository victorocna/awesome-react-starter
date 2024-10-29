import ComboboxField from '@components/Fields/Combobox';
import { useFormContext } from 'react-hook-form';

const Combobox = ({ children, name, ...props }) => {
  const { watch, setValue } = useFormContext();

  const handleSelect = (value) => {
    setValue(name, value);
  };

  return (
    <ComboboxField defaultSelected={watch(name)} onSelect={handleSelect} {...props}>
      {children}
    </ComboboxField>
  );
};

export default Combobox;
