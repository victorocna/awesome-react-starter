import { useRef } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { format as dateFormat } from 'date-fns';

const Datepicker = (props) => {
  const inputProps = { className: 'outline-none' };
  const dayPickerProps = { firstDayOfWeek: 1 };

  const formatDate = (date, format = 'dd/MM/yyyy') => {
    return dateFormat(date, format);
  };

  const ref = useRef();
  const openPicker = () => {
    ref.current.input.focus();
  };

  return (
    <div className="flex form-input bg-white cursor-pointer" onClick={openPicker}>
      <DayPickerInput
        ref={ref}
        inputProps={inputProps}
        dayPickerProps={dayPickerProps}
        placeholder="dd/MM/yyyy"
        format="dd/MM/yyyy"
        formatDate={formatDate}
        {...props}
      />
      <i className="my-auto far fa-calendar-alt text-primary" />
    </div>
  );
};

export default Datepicker;
