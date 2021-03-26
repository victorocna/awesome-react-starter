import React from 'react';
import { useSelect } from 'downshift';
import { prepareItems } from '../../functions';

const DropdownSelect = ({ items, placeholder, onSelect }) => {
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect(prepareItems(items, onSelect));

  return (
    <div className="relative">
      <button
        className={`form-better-select ${isOpen ? 'border-b-0 rounded-b-none' : ''}`}
        {...getToggleButtonProps()}
      >
        <span>{(selectedItem && selectedItem.verbose) || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </button>
      <ul className={isOpen ? 'form-better-select__dropdown' : ''} {...getMenuProps()}>
        {isOpen &&
          items.map(({ value, verbose }, index) => (
            <li
              className={`py-1 px-3 ${highlightedIndex === index && 'bg-gray-400'}`}
              key={`${value}${index}`}
              {...getItemProps({ value, index })}
            >
              {verbose}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
