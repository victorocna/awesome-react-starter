import { useCombobox as useDownshift } from 'downshift';
import { isEqual, isFunction } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import useChildren from './use-children';

/**
 * Custom hook that enhances downshift useCombobox
 *
 * @param {Object} options
 * @param {Array<Any>} options.children The children of the Combobox component
 * @param {String} options.id The id of the Combobox component
 * @param {Function} options.onChange Callback fired when the selected item changes
 * @param {String} options.value The current value of the Combobox
 * @returns {Object} Returns downshift props
 * @see https://www.downshift-js.com/use-combobox
 */
const useCombobox = ({ children, id, onChange, value }) => {
  // Convert Combobox's component children to Downshift items
  const items = useChildren(children);

  // Keep the items in a state
  const [inputItems, setInputItems] = useState(items);

  // Track last query and last "source items" so we don't clobber filtering
  const lastQueryRef = useRef('');
  const sourceItemsRef = useRef(items);

  useEffect(() => {
    // Change the input items whenever the *content* of `items` changes.
    // Do NOT reset while the user is filtering; instead, re-apply the filter.
    if (!isEqual(sourceItemsRef.current, items)) {
      sourceItemsRef.current = items;
      const q = (lastQueryRef.current || '').toLowerCase();
      if (q === '') {
        setInputItems(items);
      } else {
        setInputItems(
          items.filter((it) =>
            String(it?.label || '')
              .toLowerCase()
              .includes(q)
          )
        );
      }
    }
  }, [items]);

  // Show an object label
  const itemToString = (item) => {
    return item?.label || '';
  };

  // Handle the selection
  const onSelectedItemChange = ({ selectedItem }) => {
    if (isFunction(onChange)) {
      return onChange(selectedItem?.value);
    }
  };

  const onInputValueChange = ({ inputValue }) => {
    // Filter the items based on the inputValue
    const qRaw = inputValue || '';
    const q = qRaw.toLowerCase();
    lastQueryRef.current = qRaw;

    if (q === '') {
      setInputItems(items);
      return;
    }

    setInputItems(
      items.filter((it) =>
        String(it?.label || '')
          .toLowerCase()
          .includes(q)
      )
    );
  };

  // Custom state reducer customizing the behavior of the Combobox
  const stateReducer = (_, actionAndChanges) => {
    const { type, changes } = actionAndChanges;

    switch (type) {
      // Reset the input value to the selected item's label when the input is blurred
      case useDownshift.stateChangeTypes.InputBlur: {
        return {
          ...changes,
          isOpen: false,
          inputValue: changes?.selectedItem?.label ?? changes?.inputValue ?? '',
        };
      }
      // When typing, keep menu open and don't force a synthetic selectedItem
      case useDownshift.stateChangeTypes.InputChange: {
        return {
          ...changes,
          isOpen: true,
          selectedItem: null,
        };
      }
      default: {
        return changes; // otherwise business as usual.
      }
    }
  };

  // Compute selected item derived from `value`
  const selectedFromValue = items?.find((it) => isEqual(it?.value, value)) || null;

  // We only want to set the initial selection once (useful if items arrive async).
  const didInitSelectRef = useRef(false);

  const downshift = useDownshift({
    id,
    items: inputItems,
    itemToString,
    onInputValueChange,
    onSelectedItemChange,
    stateReducer,
    // Uncontrolled: set only the initial selected item, once.
    initialSelectedItem: selectedFromValue,
  });

  const { selectedItem, selectItem } = downshift;

  // Guard against future reselects caused by items/value recalculations.
  // This ensures a single "initial" sync when items appear later.
  useEffect(() => {
    if (!didInitSelectRef.current) {
      didInitSelectRef.current = true;
      if (selectedFromValue && !isEqual(selectedItem, selectedFromValue)) {
        selectItem?.(selectedFromValue);
      }
    }
  }, [selectedFromValue, selectedItem, selectItem]);

  return { inputItems, ...downshift };
};

export default useCombobox;
