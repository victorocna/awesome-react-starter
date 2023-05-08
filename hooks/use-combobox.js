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
  // Find the default selected item by value
  const isDefaultSelected = (item) => {
    return item?.value === defaultSelected;
  };
  const defaultSelectedItem = items.find(isDefaultSelected) || null;

  // Show a string or an object label
  const itemToString = (item) => {
    return item?.label || item;
  };

  // Handle the selection
  const onSelectedItemChange = ({ selectedItem }) => {
    if (isFunction(onSelect)) {
      return onSelect(selectedItem?.value);
    }
  };

  // Filter the items based on the inputValue
  const [inputItems, setInputItems] = useState(items);
  const onInputValueChange = ({ inputValue }) => {
    setInputItems(
      items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()))
    );
  };

  const downshift = useDownshift({
    items: inputItems,
    itemToString,
    defaultSelectedItem,
    onInputValueChange,
    onSelectedItemChange,
  });

  return {
    inputItems,
    ...downshift,
  };
};

export default useCombobox;
