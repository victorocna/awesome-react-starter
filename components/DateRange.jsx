import { dateLocaleRo, isValidDate } from '@functions';
import { endOfDay } from 'date-fns';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DateRangePicker, DefinedRange } from 'react-date-range';
import { ro } from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button } from '.';
import { DEFAULT_DATE_RANGE, EMPTY_RANGE } from '@constants/date-ranges';
import { useDisclosure } from '@hooks';

const DateRange = ({ start, end, onChange, customRange }) => {
  const { isOpen, show, hide } = useDisclosure();
  const defaultDate = start && end ? { startDate: start, endDate: end } : EMPTY_RANGE;
  const [range, setRange] = useState(defaultDate);
  const staticRanges = customRange || DEFAULT_DATE_RANGE;

  const handleChange = (item) => {
    setRange(item['range1']);
  };

  const handleReset = () => {
    setRange(EMPTY_RANGE);
    if (typeof onChange === 'function') {
      onChange({});
    }
    hide();
  };

  const onConfirm = () => {
    hide();

    if (typeof onChange === 'function') {
      onChange({
        from: isValidDate(range.startDate) && range.startDate,
        to: isValidDate(range.endDate) && endOfDay(range.endDate),
      });
    }
  };

  return (
    <div className="w-full md:w-96 flex flex-row gap-6 justify-between">
      <div className="w-[calc(50%-1rem)]">
        <label className="label">Dată început</label>
        <div className="input relative flex items-center cursor-pointer h-11.5 p-3" onClick={show}>
          <p>{isValidDate(range?.startDate) ? dateLocaleRo(range.startDate) : 'Alege o dată'}</p>
          <i className="fas fa-calendar text-lg ml-4 absolute right-3 text-gray-500 dark:text-slate-600" />
        </div>
      </div>
      <div className="w-[calc(50%-1rem)]">
        <label className="label">Dată sfârșit</label>
        <div className="input relative flex items-center cursor-pointer h-11.5 p-3" onClick={show}>
          <p>{isValidDate(range?.endDate) ? dateLocaleRo(range.endDate) : 'Alege o dată'}</p>
          <i className="fas fa-calendar text-lg ml-4 absolute right-3 text-gray-500 dark:text-slate-600" />
        </div>
      </div>
      <Modal
        className="flex items-center"
        size="lg"
        dialogClassName="w-full mx-3 md:mx-auto md:w-5/12"
        centered
        show={isOpen}
        onHide={hide}
      >
        <h2 className="py-6 px-6 text-2xl font-semibold dark:text-white">
          Alegeți intervalul de timp
        </h2>

        {/* For resolutions > 768px */}
        <DateRangePicker
          onChange={handleChange}
          months={1}
          direction="horizontal"
          ranges={[range]}
          locale={ro}
          staticRanges={staticRanges}
          inputRanges={[]}
          rangeColors={['#53B0AE']}
          className="pl-4 pr-6 h-full overscroll-auto hidden md:flex"
        />

        {/* For resolutions < 768px */}
        <DefinedRange
          onChange={handleChange}
          className="w-full md:hidden"
          ranges={[range]}
          inputRanges={[]}
          staticRanges={staticRanges}
        />

        {/* Buttons */}
        <div className="flex mx-6 my-6 gap-4 justify-between flex-col md:flex-row ">
          <div className="flex gap-4 flex-col md:flex-row">
            <Button className="cancel" onClick={hide}>
              Anulează
            </Button>
            <Button className="delete" onClick={handleReset}>
              Șterge filtrul
            </Button>
          </div>
          <Button className="confirm" onClick={onConfirm}>
            Alege
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DateRange;
