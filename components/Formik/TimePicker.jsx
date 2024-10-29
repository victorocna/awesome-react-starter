import TimePickerField from '@components/Fields/TimePicker';
import { useFormikContext } from 'formik';

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
