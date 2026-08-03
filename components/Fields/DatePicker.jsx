import { isValidDate } from '@functions';
import { useDisclosure } from '@hooks';
import { format as dateFormat } from 'date-fns';
import { isFunction } from 'lodash';
import { useEffect, useState } from 'react';
import { Dialog } from 'radix-ui';
import Calendar from 'react-calendar';
import Input from './Input';

/**
 * A date picker component containing an input field and a calendar picker modal.
 *
 * @param {Object} props
 * @param {string} props.id Unique ID for the input field
 * @param {string} props.value Current date value (yyyy-MM-dd)
 * @param {function} props.onChange Callback function triggered on date change
 * @param {Object} [props.calendarProps] Optional configuration props for the react-calendar component
 */
const DatePicker = ({ id, value: initialValue, onChange, calendarProps = {}, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const { isOpen, show, hide } = useDisclosure();

  const onClickDay = (value) => {
    setValue(dateFormat(value, 'yyyy-MM-dd'));
    hide();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isFunction(onChange)) {
      try {
        onChange(isValidDate(value) ? value : '');
      } catch {
        onChange('');
      }
    }
  }, [value, onChange]);

  if (isValidDate(new Date(initialValue))) {
    calendarProps.defaultValue = new Date(initialValue);
  } else {
    calendarProps.defaultValue = new Date();
  }

  return (
    <div className="relative">
      <Input {...props} id={id} onChange={handleChange} value={value} />
      <div
        className="absolute right-0 top-0 grid h-full cursor-pointer place-items-center p-2.5 outline-none"
        onClick={show}
      >
        <i className="fas fa-calendar-alt text-primary" />
      </div>

      <Dialog.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            hide();
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-lg ring-1 ring-primary/10 outline-none">
            <Dialog.Title className="sr-only">Choose Date</Dialog.Title>
            <Calendar onClickDay={onClickDay} {...calendarProps} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default DatePicker;

