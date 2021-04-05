import { useSelect as select } from 'downshift';

const useSelect = ({ children, onSelect, ...props }) => {
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
  const wow = prepareItems(children, onSelect);

  return select({ ...wow, ...props });
};

export default useSelect;
