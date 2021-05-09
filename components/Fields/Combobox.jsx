import { useState } from 'react';
import { useCombobox } from 'downshift';
import { classnames } from '../../functions';

const Combobox = ({ children }) => {
  const newones = children.map(({ props: { value, defaultSelected, children } }) => ({
    value,
    defaultSelected,
    label: children,
  }));
  const items = newones.map(({ label }) => label);

  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()))
      );
    },
  });

  const showItems = (item, index) => {
    return (
      <li
        className={classnames('py-1 px-3', highlightedIndex === index && 'bg-gray-400')}
        {...getItemProps({ item, index, key: `${item}${index}` })}
      >
        {item}
      </li>
    );
  };

  return (
    <div className="relative">
      <div
        className={classnames('form-dropdown', isOpen && inputItems.length && 'rounded-b-none')}
        {...getComboboxProps()}
      >
        <input className="-my-2 outline-none w-full bg-transparent" {...getInputProps()} />
        <span role="button" {...getToggleButtonProps()}>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <ul
        className={classnames(
          'outline-none my-0 max-h-40 overflow-y-auto',
          isOpen && inputItems.length && 'form-dropdown-list'
        )}
        {...getMenuProps()}
      >
        {isOpen && inputItems.map(showItems)}
      </ul>
    </div>
  );
};

export default Combobox;
