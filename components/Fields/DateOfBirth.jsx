import { getDays, getYears, isValidDate, months } from '@constants/date-of-birth';
import { classnames } from '@lib';
import { isValid } from 'date-fns';
import { isFunction } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

const Select = ({ extraClass = '', id, label, onChange, options, value }) => {
  return (
    <div className={classnames('relative rounded-lg border border-gray-400', extraClass)}>
      <label className="absolute left-0 top-0 px-2 pt-2 text-xs text-gray-400" id={`${id}-label`}>
        <span>{label}</span>
      </label>
      <select
        aria-labelledby={`${id}-label`}
        className="mt-4 w-full cursor-pointer appearance-none bg-transparent p-2 pt-3"
        id={id}
        onChange={onChange}
        value={value}
      >
        <option hidden value=""></option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

const DateOfBirth = ({ onChange, value }) => {
  const defaultValue = useMemo(() => (isValid(new Date(value)) ? new Date(value) : null), [value]);

  const [day, setDay] = useState(defaultValue?.getDate() || '');
  const [month, setMonth] = useState(defaultValue?.getMonth() + 1 || '');
  const [year, setYear] = useState(defaultValue?.getFullYear() || '');

  const days = useMemo(() => getDays(month, year), [month, year]);
  const years = useMemo(() => getYears(month, day), [month, day]);

  useEffect(() => {
    if (!isFunction(onChange)) {
      return null;
    }
    if (day && month && year && isValidDate(day, month, year)) {
      onChange(new Date(year, month - 1, day));
    } else {
      onChange('');
    }
  }, [day, month, year]);

  return (
    <div className="grid w-full grid-cols-12 grid-rows-1 gap-3">
      <Select
        extraClass="col-span-5"
        id="month"
        label="Month"
        onChange={(event) => setMonth(event.target.value)}
        options={months}
        value={month}
      />
      <Select
        extraClass="col-span-3"
        id="day"
        label="Day"
        onChange={(event) => setDay(event.target.value)}
        options={days}
        value={day}
      />
      <Select
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
