import { useSelect as useDownshift } from 'downshift';
import { isEqual, isFunction } from 'lodash';
import { MD5 } from 'object-hash';
import { useEffect, useId, useState } from 'react';
import useChildren from './use-children';

/**
 * Custom hook that enhances downshift useSelect
 *
 * @param {Object} options
 * @param {Array<Any>} options.children the children of the Dropdown component
 * @param {String} options.id optional stable id for the dropdown
 *
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useSelect = ({ children, value, onChange, id }) => {
  // Convert Dropdown's component children to Downshift items
  const items = useChildren(children);

  // Show an object label
  const itemToString = (item) => {
    return item.label;
  };

  // Handle the selection
  const onSelectedItemChange = ({ selectedItem }) => {
    if (isFunction(onChange)) {
      return onChange(selectedItem.value);
    }
  };

  // Keep the items in a state
  const [inputItems, setInputItems] = useState(items);
  useEffect(() => {
    // Change the input items whenever the items prop changes
    setInputItems(items);
  }, [MD5(items)]);
  // Using `items` only as a dependency won't trigger the useEffect because it is a reference,
  // so we hash it instead.

  // Generate a stable ID for consistent server/client rendering
  const generatedId = useId();
  const stableId = id || generatedId;

  const downshift = useDownshift({
    items: inputItems,
    itemToString,
    onSelectedItemChange,
    id: stableId,
  });

  // Find the default selected item by value
  const isDefaultSelected = (item) => {
    return isEqual(item.value, value);
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

export default useSelect;
