import { DateOfBirth as DateOfBirthField } from '@components/Fields';
import { format } from 'date-fns';
import { useFormikContext } from 'formik';

const formatDate = (date, dateFormat = 'yyyy-MM-dd') => {
  return format(new Date(date), dateFormat);
};

const DateOfBirth = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(name, formatDate(value));
    } catch (err) {
      setFieldValue(name, '');
    }
  };

  if (props?.value) {
    props.value = formatDate(props.value);
  }

  return <DateOfBirthField {...props} name={name} onChange={handleChange} />;
};

export default DateOfBirth;
