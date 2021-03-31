import React from 'react';
import { useSelect } from 'downshift';
import { prepareItems } from '../../functions';

const Dropdown = ({ placeholder, onSelect, children }) => {
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect(prepareItems(children, onSelect));

  return (
    <div className="relative">
      <div
        className={`form-better-select ${isOpen ? 'rounded-b-none' : ''}`}
        {...getToggleButtonProps()}
      >
        <span>{(selectedItem && selectedItem.verbose) || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <ul className={isOpen ? 'form-better-select__dropdown' : ''} {...getMenuProps()}>
        {isOpen &&
          children.map(({ props: { value, children } }, index) => (
            <li
              className={`py-1 px-3 ${highlightedIndex === index && 'bg-gray-400'}`}
              key={`${value}${index}`}
              {...getItemProps({ value, index })}
            >
              {children}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
