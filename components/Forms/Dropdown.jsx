import React, { useState, useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import Downshift from 'downshift';

const Dropdown = ({ name, value, placeholder, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenToItems = ({ value, children }) => {
    if (typeof children === 'object') {
      return childrenToItems({
        value: value || children.props.children,
        children: children.props.children,
      });
    }

    return {
      label: children,
      value: value || children,
    };
  };
  const options = React.Children.map(children, ({ props }) => {
    return childrenToItems(props);
  });

  const { touched, setTouched, setFieldValue } = useFormikContext();
  const handleSelect = (value) => {
    setIsOpen(false);
    setFieldValue(name, value);
  };

  const ref = useRef();
  useEffect(() => {
    if (!isOpen) {
      ref.current.blur();
      setTouched({ [name]: true, ...touched });
    }
  }, [isOpen]);

  const showLabel = (value) => {
    try {
      const option = options.filter((item) => item.value === value);
      return option[0].label;
    } catch (err) {
      return value;
    }
  };

  const showItem = ({ getItemProps, highlightedIndex, selectedItem }) => {
    // eslint-disable-next-line
    return (item, index) => {
      const classes = ['p-2 z-50 bg-white'];
      if (highlightedIndex === index) {
        classes.push('bg-blue-200');
      }
      if (selectedItem === item.value) {
        classes.push('bg-blue-200');
      }

      return (
        <li
          key={item.value}
          className={classes.join(' ')}
          {...getItemProps({ index, item: item.value })}
        >
          {item.label}
        </li>
      );
    };
  };

  return (
    <Downshift isOpen={isOpen} onChange={handleSelect}>
      {({ getInputProps, getMenuProps, inputValue, ...rest }) => (
        <div className="relative">
          <div className="relative">
            <input
              {...getInputProps()}
              ref={ref}
              placeholder={placeholder}
              value={showLabel(value || inputValue)}
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
              className="absolute z-50 w-full mt-2 border shadow rounded overflow-y-auto max-h-50"
              {...getMenuProps()}
            >
              {options.map(showItem(rest))}
            </ul>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default Dropdown;
