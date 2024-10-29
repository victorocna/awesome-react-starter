import DatePickerField from '@components/Fields/DatePicker';
import { format as dateFormat } from 'date-fns';
import { useFormikContext } from 'formik';

const Datepicker = ({ name, onChange, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(name, dateFormat(new Date(value), 'yyyy-MM-dd'));
    } catch (err) {
      setFieldValue(name, '');
    }
  };

  return <DatePickerField name={name} onChange={handleChange} {...props} />;
};

export default Datepicker;
