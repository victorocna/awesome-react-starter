import { useCombobox as useDownshift } from 'downshift';
import { isEqual, isFunction } from 'lodash';
import { MD5 } from 'object-hash';
import { useEffect, useState } from 'react';
import { useChildren } from '.';

/**
 * Custom hook that enhances downshift useCombobox
 *
 * @param {Object} options
 * @param {Array<Any>} options.children the children of the Combobox component
 *
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useCombobox = ({ children, onSelect, defaultSelected }) => {
  // Convert Combobox's component children to Downshift items
  const items = useChildren(children);

  // Show an object label
  const itemToString = (item) => {
    return item.label;
  };

  // Handle the selection
  const onSelectedItemChange = ({ selectedItem }) => {
    if (isFunction(onSelect)) {
      return onSelect(selectedItem.value);
    }
  };

  // Keep the items in a state
  const [inputItems, setInputItems] = useState(items);
  const onInputValueChange = ({ inputValue }) => {
    // Filter the items based on the inputValue
    setInputItems(
      items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()))
    );

    // If the value is empty, select an empty string
    if (!inputValue) {
      onSelectedItemChange({ selectedItem: { value: '' } });
    }
  };

  useEffect(() => {
    // Change the input items whenever the items prop changes
    setInputItems(items);
  }, [MD5(items)]);
  // Using `items` only as a dependency won't trigger the useEffect because it is a reference,
  // so we hash it instead.

  const downshift = useDownshift({
    items: inputItems,
    itemToString,
    onInputValueChange,
    onSelectedItemChange,
  });

  // Find the default selected item by value
  const isDefaultSelected = (item) => {
    return isEqual(item.value, defaultSelected);
  };
  const defaultSelectedItem = items.find(isDefaultSelected) || null;

  // Select the default item if any
  useEffect(() => {
    if (defaultSelectedItem) {
      downshift?.selectItem(defaultSelectedItem);
    }
  }, [MD5(items)]);

  return { inputItems, ...downshift };
};

export default useCombobox;
