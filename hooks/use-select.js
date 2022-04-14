import { useSelect as useDownshiftSelect } from 'downshift';

const useSelect = ({ children, onSelect, defaultSelected }) => {
  const prepareItems = (children = [], onSelect = () => {}) => {
    const items = children.map(({ props: { value, children } }) => ({
      value,
      label: children,
    }));

    return {
      items,
      defaultSelectedItem: items.find((item) => item?.value === defaultSelected) || null,
      itemToString: (item) => item?.label || item,
      onSelectedItemChange: ({ selectedItem = {} }) => onSelect(selectedItem.value),
    };
  };
  const preparedItems = prepareItems(children, onSelect);

  return useDownshiftSelect(preparedItems);
};

export default useSelect;
