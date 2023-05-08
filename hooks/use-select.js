import { isFunction } from 'lodash';
import { useSelect as useDownshift } from 'downshift';

/**
 * Custom hook that enhances downshift useSelect
 *
 * @param {Object} options
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-select
 */
const useSelect = ({ items, onSelect, defaultSelected }) => {
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

  const downshift = useDownshift({
    items,
    itemToString,
    defaultSelectedItem,
    onSelectedItemChange,
  });

  return downshift;
};

export default useSelect;
