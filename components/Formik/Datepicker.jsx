import { format as dateFormat } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { useFormikContext } from 'formik';

const Datepicker = ({ name, ...props }) => {
  const inputProps = { className: 'form-input w-full' };
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(name, dateFormat(value, 'yyyy-MM-dd'));
    } catch (err) {
      setFieldValue(name, null);
    }
  };

  return (
    <DayPickerInput
      name={name}
      inputProps={inputProps}
      onDayChange={handleChange}
      placeholder="yyyy-MM-dd"
      {...props}
    />
  );
};

export default Datepicker;
