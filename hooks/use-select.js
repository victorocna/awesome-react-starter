import { isFunction, isEqual } from 'lodash';
import { useSelect as useDownshift } from 'downshift';
import { useChildren } from '.';
import { useEffect, useState } from 'react';

/**
 * Custom hook that enhances downshift useSelect
 *
 * @param {Object} options
 * @param {Array<Any>} options.children the children of the Dropdown component
 *
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useSelect = ({ children, onSelect, defaultSelected }) => {
  // Convert Dropdown's component children to Downshift items
  const items = useChildren(children);

  // Find the default selected item by value
  const isDefaultSelected = (item) => {
    return isEqual(item.value, defaultSelected);
  };
  const defaultSelectedItem = items.find(isDefaultSelected) || null;

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
  useEffect(() => {
    // Change the input items whenever the items prop changes
    setInputItems(items);
  }, [JSON.stringify(items)]);
  // Using `items` only as a dependency won't trigger the useEffect because it is a reference,
  // so we stringify it instead.

  const downshift = useDownshift({
    items: inputItems,
    itemToString,
    defaultSelectedItem,
    onSelectedItemChange,
  });

  return { inputItems, ...downshift };
};

export default useSelect;
