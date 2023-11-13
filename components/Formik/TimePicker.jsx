import { useFormikContext } from 'formik';
import TimePickerField from '../Fields/TimePicker';

const TimePicker = ({ name: field, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(field, value);
    } catch (err) {
      setFieldValue(field, null);
    }
  };

  return <TimePickerField onChange={handleChange} {...props} />;
};

export default TimePicker;
