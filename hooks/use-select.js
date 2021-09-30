import { useSelect as select } from 'downshift';

const useSelect = ({ children, onSelect, ...props }) => {
  const prepareItems = (children = [], onSelect = () => {}) => {
    const items = children.map(({ props: { value, defaultSelected, children } }) => ({
      value,
      defaultSelected,
      label: children,
    }));

    return {
      items,
      defaultSelectedItem: items.find(({ defaultSelected }) => defaultSelected) || null,
      itemToString: ({ label }) => label,
      onSelectedItemChange: ({ selectedItem = {} }) => onSelect(selectedItem.value),
    };
  };
  const preparedItems = prepareItems(children, onSelect);

  return select({ ...preparedItems, ...props });
};

export default useSelect;
