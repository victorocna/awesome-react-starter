import { getDays, getYears, isValidDate, months } from '@constants/date-of-birth';
import { formatDate } from '@functions';
import { isValid } from 'date-fns';
import { isFunction } from 'lodash';
import { useEffect, useState } from 'react';
import LabeledSelect from './LabeledSelect';

const DateOfBirth = ({ value, onChange, format = 'yyyy-MM-dd' }) => {
  const defaultValue = isValid(new Date(value)) ? new Date(value) : null;

  const [day, setDay] = useState(defaultValue?.getDate() || '');
  const [month, setMonth] = useState(defaultValue?.getMonth() + 1 || '');
  const [year, setYear] = useState(defaultValue?.getFullYear() || '');

  const days = getDays(month, year);
  const years = getYears(month, day);

  useEffect(() => {
    if (isFunction(onChange)) {
      if (day && month && year && isValidDate(day, month, year)) {
        onChange(formatDate(new Date(year, month - 1, day), format));
      } else {
        onChange('');
      }
    }
  }, [day, month, year, format, onChange]);

  return (
    <div className="grid w-full grid-cols-12 grid-rows-1 gap-3">
      <LabeledSelect
        extraClass="col-span-5"
        id="month"
        label="Month"
        onChange={(event) => setMonth(event.target.value)}
        options={months}
        value={month}
      />
      <LabeledSelect
        extraClass="col-span-3"
        id="day"
        label="Day"
        onChange={(event) => setDay(event.target.value)}
        options={days}
        value={day}
      />
      <LabeledSelect
        extraClass="col-span-4"
        id="year"
        label="Year"
        onChange={(event) => setYear(event.target.value)}
        options={years}
        value={year}
      />
    </div>
  );
};

export default DateOfBirth;
