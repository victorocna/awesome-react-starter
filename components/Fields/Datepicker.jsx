import { format as dateFormat } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const Datepicker = ({ onChange, ...props }) => {
  const inputProps = { className: 'form-input w-full' };

  const formatDate = (date, format, locale) => {
    return dateFormat(date, format, { locale });
  };

  if (typeof onChange === 'function') {
    props.onDayChange = onChange;
  }

  return (
    <DayPickerInput
      formatDate={formatDate}
      inputProps={inputProps}
      placeholder="yyyy-MM-dd"
      {...props}
    />
  );
};

export default Datepicker;
