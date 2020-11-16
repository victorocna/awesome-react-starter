import { useState, useEffect, useRef } from 'react';
import Downshift from 'downshift';

const Dropdown = ({ items = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  const ref = useRef();
  useEffect(() => {
    if (!isOpen) {
      ref.current.blur();
    }
  }, [isOpen]);

  const showItem = (item, index, props) => {
    const { getItemProps, highlightedIndex, selectedItem } = props;
    const classes = ['p-2 z-50 bg-white'];
    if (highlightedIndex === index) {
      classes.push('bg-blue-200');
    }
    if (selectedItem === item) {
      classes.push('bg-blue-200');
    }

    return (
      <li key={item} className={classes.join(' ')} {...getItemProps({ index, item })}>
        {item}
      </li>
    );
  };

  return (
    <Downshift isOpen={isOpen} onSelect={handleSelect}>
      {({ getInputProps, getMenuProps, ...props }) => (
        <div className="relative">
          <div className="relative">
            <input
              {...getInputProps()}
              ref={ref}
              className="form-input w-full"
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              readOnly
            />
            <div className="absolute text-gray-600 top-0 right-0 p-3 text-xs outline-none">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          {isOpen && (
            <ul
              className="absolute w-full mt-2 border shadow rounded overflow-y-auto max-h-50"
              {...getMenuProps()}
            >
              {items.map((item, index) => showItem(item, index, props))}
            </ul>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default Dropdown;
