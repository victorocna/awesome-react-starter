import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Modal } from 'react-bootstrap';
import { format as dateFormat } from 'date-fns';
import { Input } from '.';
import { useDisclosure } from '../../hooks';
import { isValidDate } from '../../functions';

const Datepicker = ({ value: initialValue, onChange, calendarProps = {}, ...props }) => {
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
    if (isValidDate(value) && typeof onChange === 'function') {
      onChange(value);
    }
  }, [value]);

  if (isValidDate(new Date(initialValue))) {
    calendarProps.defaultValue = new Date(initialValue);
  }

  return (
    <div className="relative">
      <Input {...props} value={value} onChange={handleChange} />
      <div
        className="absolute h-full top-0 right-0 p-2.5 outline-none cursor-pointer grid place-items-center"
        onClick={show}
      >
        <i className="fas fa-calendar-alt text-primary" />
      </div>

      {isOpen && (
        <Modal centered show={true} onHide={hide}>
          <Calendar onClickDay={onClickDay} {...calendarProps} />
        </Modal>
      )}
    </div>
  );
};

export default Datepicker;
