/**
 * Used for constructing useSelect hook params
 */
const prepareItems = (children = [], onSelect = () => {}) => {
  const items = children.map(({ props: { value, defaultSelected, children } }) => ({
    value,
    defaultSelected,
    verbose: children,
  }));

  return {
    items,
    defaultSelectedItem: items.find(({ defaultSelected }) => defaultSelected) || null,
    itemToString: ({ verbose }) => verbose,
    onSelectedItemChange: ({ selectedItem = {} }) => onSelect(selectedItem.value),
  };
};

export default prepareItems;
