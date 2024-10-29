import DateOfBirthField from '@components/Fields/DateOfBirth';
import { formatDate } from '@functions';
import { useFormikContext } from 'formik';

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
