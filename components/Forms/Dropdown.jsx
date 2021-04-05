import { useSelect } from 'downshift';
import { prepareItems, classnames } from '../../functions';

const Dropdown = ({ placeholder, onSelect, children }) => {
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect(prepareItems(children, onSelect));

  const showItems = ({ props: { value, children } }, index) => {
    const key = `${value}${index}`;
    const className = classnames('py-1 px-3', highlightedIndex === index && 'bg-gray-400');

    return (
      <li key={key} className={className} {...getItemProps({ value, index })}>
        {children}
      </li>
    );
  };

  return (
    <div className="relative">
      <div
        className={classnames('form-better-select', isOpen && 'rounded-b-none')}
        {...getToggleButtonProps()}
      >
        <span>{(selectedItem && selectedItem.verbose) || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <ul className={classnames(isOpen && 'form-better-select__dropdown')} {...getMenuProps()}>
        {isOpen && children.map(showItems)}
      </ul>
    </div>
  );
};

export default Dropdown;
