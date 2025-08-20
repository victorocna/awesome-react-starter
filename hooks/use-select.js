import { useSelect as useDownshift } from 'downshift';
import { isEqual, isFunction } from 'lodash';
import { useEffect, useId, useState } from 'react';
import useChildren from './use-children';

/**
 * Custom hook that enhances downshift useSelect
 *
 * @param {Object} options
 * @param {Array<Any>} options.children The children of the Dropdown component
 * @param {String} options.id Optional stable id for the dropdown
 * @param {Function} options.onChange Callback fired when the selected item changes
 * @param {String} options.value The current value of the dropdown
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useSelect = ({ children, id, onChange, value }) => {
  // Convert Dropdown's component children to Downshift items
  const items = useChildren(children);

  // Show an object label
  const itemToString = (item) => {
    return item ? item.label : '';
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
    // Change the input items whenever the items prop changes.
    // Use a functional updater + deep equality check so we don't replace the state
    // when `items` is a new reference but has the same content. This prevents
    // a render loop caused by repeatedly setting state to a new-array reference.
    setInputItems((prev) => (isEqual(prev, items) ? prev : items));
  }, [items]);

  // Generate a stable ID for consistent server/client rendering
  const generatedId = useId();
  const stableId = id || generatedId;

  const downshift = useDownshift({
    items: inputItems,
    itemToString,
    onSelectedItemChange,
    id: stableId,
  });

  // Pull only the pieces we need so we can depend on stable values in effects
  const { selectedItem, selectItem } = downshift;

  // Find the default selected item by value
  const isDefaultSelected = (item) => {
    return isEqual(item.value, value);
  };
  const defaultSelectedItem = items.find(isDefaultSelected) || null;

  // Select the default item if any
  useEffect(() => {
    if (defaultSelectedItem && !selectedItem && !isEqual(selectedItem, defaultSelectedItem)) {
      selectItem(defaultSelectedItem);
    }
  }, [defaultSelectedItem, selectedItem, selectItem]);

  return { inputItems, ...downshift };
};

export default useSelect;
