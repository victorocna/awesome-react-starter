import DateOfBirthField from '@components/Fields/DateOfBirth';
import { formatDate } from '@functions';
import { Controller, useFormContext } from 'react-hook-form';

const DateOfBirth = ({ name, ...props }) => {
  const { control, setValue, watch } = useFormContext();

  const handleChange = (value) => {
    try {
      setValue(name, formatDate(value));
    } catch (err) {
      setValue(name, '');
    }
  };

  // Format the initial value using watch
  const formattedValue = watch(name) ? formatDate(watch(name)) : '';

  // Render the component with the formatted value
  const render = ({ field }) => {
    return (
      <DateOfBirthField {...field} {...props} value={formattedValue} onChange={handleChange} />
    );
  };

  return <Controller control={control} name={name} render={render} />;
};

export default DateOfBirth;
