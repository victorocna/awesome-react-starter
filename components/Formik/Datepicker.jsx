import { Datepicker as DatePicker } from '@components/Fields';
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

  return <DatePicker name={name} onChange={handleChange} {...props} />;
};

export default Datepicker;
