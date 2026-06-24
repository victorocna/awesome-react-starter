import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';
import { formatDate } from '@functions';
import { CalendarIcon } from 'lucide-react';

const DatePicker = ({ value, onChange, calendarProps, ...props }) => {
  const handleChange = (newDate) => {
    if (typeof onChange === 'function') {
      onChange(newDate);
    }
  };

  return (
    <>
      <input type="hidden" {...props} value={value ? JSON.stringify(value) : ''} />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="justify-start px-2.5 font-normal w-full overflow-hidden text-ellipsis"
          >
            <CalendarIcon className="size-4 mr-2" />
            {value ? formatDate(value, 'LLL dd, y') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleChange}
            captionLayout="dropdown"
            numberOfMonths={1}
            resetOnSelect
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
