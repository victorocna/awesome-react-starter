import { format as dateFormat } from 'date-fns';
import { useFormikContext } from 'formik';
import { Datepicker as DatePicker } from '../Fields';

const Datepicker = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(name, dateFormat(value, 'yyyy-MM-dd'));
    } catch (err) {
      setFieldValue(name, null);
    }
  };

  return <DatePicker name={name} onChange={handleChange} {...props} />;
};

export default Datepicker;
