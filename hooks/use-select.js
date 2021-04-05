import { useSelect as select } from 'downshift';

const useSelect = (children, onSelect, ...args) => {
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

  return select(prepareItems(children, onSelect), ...args);
};

export default useSelect;
