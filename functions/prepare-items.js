/**
 * Used for constructing useSelect hook params
 */
const prepareItems = (items = [], onSelect = () => {}) => {
  return {
    items,
    defaultSelectedItem: items.find(({ defaultSelected }) => defaultSelected) || null,
    itemToString: ({ verbose }) => verbose,
    onSelectedItemChange: ({ selectedItem = {} }) => onSelect(selectedItem.value),
  };
};

export default prepareItems;
