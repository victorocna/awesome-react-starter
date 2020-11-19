import React, { useState, useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import Downshift from 'downshift';

const Dropdown = ({ name, placeholder, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFieldValue, touched, setTouched } = useFormikContext();

  const handleSelect = (value) => {
    setIsOpen(false);
    setTouched({ ...touched, name });
    setFieldValue(name, value);
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
    if (selectedItem === item.props.children) {
      classes.push('bg-blue-200');
    }

    return (
      <li
        key={item.props.value}
        className={classes.join(' ')}
        {...getItemProps({ index, item: item.props.children })}
      >
        {item.props.children}
      </li>
    );
  };

  return (
    <Downshift isOpen={isOpen} onChange={(value) => handleSelect(value)}>
      {({ getInputProps, getMenuProps, ...rest }) => (
        <div className="relative">
          <div className="relative">
            <input
              {...getInputProps()}
              ref={ref}
              placeholder={placeholder}
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
              {React.Children.map(children, (item, index) => showItem(item, index, rest))}
            </ul>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default Dropdown;
