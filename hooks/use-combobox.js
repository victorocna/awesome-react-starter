import { useState } from 'react';
import { isFunction } from 'lodash';
import { useCombobox as useDownshift } from 'downshift';

/**
 * Custom hook that enhances downshift useCombobox
 *
 * @param {Object} options
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useCombobox = ({ items, onSelect, defaultSelected }) => {
  const [inputItems, setInputItems] = useState(items);

  const downshift = useDownshift({
    items: inputItems,
    itemToString: (item) => item?.label || item,
    defaultSelectedItem: items.find((item) => item?.value === defaultSelected) || null,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()))
      );
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (isFunction(onSelect)) {
        return onSelect(selectedItem?.value);
      }
    },
  });

  return {
    inputItems,
    ...downshift,
  };
};

export default useCombobox;
