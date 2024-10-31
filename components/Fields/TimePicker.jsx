import { useDisclosure, useOnClickOutside } from '@hooks';
import { classnames } from '@lib';
import { isFunction } from 'lodash';
import { useMemo, useRef, useState } from 'react';

const TimePicker = ({ disabled = false, interval = 1, onChange, placeholder, value }) => {
  const [time, setTime] = useState({
    hour: Number(value?.split(':')[0]),
    minute: Number(value?.split(':')[1]),
  });
  const ref = useRef();
  const { hide, isOpen, show } = useDisclosure();
  useOnClickOutside(ref, hide);

  const isTimeValid = (time) => {
    return (
      !isNaN(time.hour) &&
      !isNaN(time.minute) &&
      time.hour <= 23 &&
      time.hour >= 0 &&
      time.minute % interval === 0 &&
      time.minute <= 59 &&
      time.minute >= 0
    );
  };

  const isTimeInvalid = useMemo(() => {
    return !isTimeValid(time);
  }, [time]);

  const formatTime = (time) => {
    if (!isTimeValid(time)) {
      return '';
    }
    return `${time.hour < 10 ? `0${time.hour}` : time.hour}:${
      time.minute < 10 ? `0${time.minute}` : time.minute
    }`;
  };

  const formattedTime = useMemo(() => {
    return formatTime(time);
  }, [time]);

  const scrollIntoView = (time) => {
    const { hour, minute } = time;

    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.parentNode.scrollTop = element.offsetTop - element.parentNode.offsetTop;
      }
    };

    if (hour) {
      scrollToElement(`hour-${hour}`);
    }
    if (minute) {
      scrollToElement(`minute-${minute}`);
    }
  };

  const handleClick = () => {
    show();

    if (!isTimeInvalid) {
      setTimeout(() => {
        scrollIntoView(time);
      }, 0);
    }
  };

  const handleChange = (type, value) => {
    let newTime = {};

    if (type === 'hour') {
      newTime = { hour: value, minute: time.minute || 0 };
    } else if (type === 'minute') {
      newTime = { hour: time.hour || 0, minute: value };
    }

    setTime((prev) => ({ ...prev, ...newTime }));
    scrollIntoView(newTime);

    if (isFunction(onChange)) {
      try {
        onChange(formatTime(newTime));
      } catch {
        onChange('');
      }
    }
  };

  return (
    <div ref={ref} className="relative w-40 select-none">
      <div className="relative" onClick={handleClick}>
        <input
          className="input pr-8"
          disabled={disabled}
          placeholder={placeholder || 'HH:mm'}
          readOnly
          type="text"
          value={formattedTime}
        />
        <span className="pointer-events-none absolute right-0 top-0 grid h-full place-items-center p-2.5 outline-none">
          <i className="fa-regular fa-clock text-primary"></i>
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-12 z-50 w-max rounded-md bg-white shadow-md">
          <div className="grid grid-cols-2 pt-1">
            <ul
              className="scrollbar-none my-1 h-64 w-14 list-none overflow-y-scroll p-0"
              id="hours"
            >
              {Array.from(Array(24).keys()).map((hour) => {
                return (
                  <li
                    className={classnames(
                      'm-0 mx-1 flex h-7 cursor-pointer items-center justify-center rounded p-0 hover:bg-gray-200',
                      time.hour === hour && 'bg-gray-200'
                    )}
                    id={`hour-${hour}`}
                    key={`hour-${hour}`}
                    onClick={handleChange.bind(null, 'hour', hour)}
                  >
                    {hour < 10 ? `0${hour}` : hour}
                  </li>
                );
              })}
            </ul>
            <ul
              className="scrollbar-none my-1 h-64 w-14 list-none overflow-y-scroll border-l border-gray-300 p-0"
              id="minutes"
            >
              {Array.from(Array(60 / interval).keys()).map((minute) => {
                return (
                  <li
                    className={classnames(
                      'm-0 mx-1 flex h-7 cursor-pointer items-center justify-center rounded p-0 hover:bg-gray-200',
                      time.minute === minute * interval && 'bg-gray-200',
                      isNaN(time.hour) && 'pointer-events-none cursor-not-allowed opacity-50'
                    )}
                    id={`minute-${minute * interval}`}
                    key={`minute-${minute * interval}`}
                    onClick={handleChange.bind(null, 'minute', minute * interval)}
                  >
                    {minute * interval < 10 ? `0${minute * interval}` : minute * interval}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center justify-end border-t border-gray-300 px-1.5 py-1">
            <button
              className="button mini primary"
              disabled={isTimeInvalid}
              onClick={hide}
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
