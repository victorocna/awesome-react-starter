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
  const downshift = useDownshift({
    items,
    itemToString: (item) => item?.label || item,
    defaultSelectedItem: items.find((item) => item?.value === defaultSelected) || null,
    onSelectedItemChange: ({ selectedItem }) => {
      if (isFunction(onSelect)) {
        return onSelect(selectedItem?.value);
      }
    },
  });

  return downshift;
};

export default useSelect;
