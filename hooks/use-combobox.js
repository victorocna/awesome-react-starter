import { isFunction } from 'lodash';
import { useCombobox as useDownshift } from 'downshift';

const useCombobox = ({ children, onSelect, defaultSelected, setInputItems }) => {
  const prepareItems = (children = [], onSelect = () => {}) => {
    const items = children.map(({ props: { value, children } }) => ({
      value,
      label: children,
    }));

    return {
      items,
      defaultSelectedItem: items.find((item) => item?.value === defaultSelected) || null,
      itemToString: (item) => item?.label || item,
      onSelectedItemChange: ({ selectedItem = {} }) => {
        if (isFunction(onSelect)) {
          return onSelect(selectedItem.value);
        }
      },
      onInputValueChange: ({ inputValue }) => {
        setInputItems(
          items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()))
        );
      },
    };
  };
  const preparedItems = prepareItems(children, onSelect);

  return useDownshift(preparedItems);
};

export default useCombobox;
