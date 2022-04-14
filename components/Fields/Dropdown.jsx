import { useSelect } from '../../hooks';
import { classnames } from '../../lib';
import DropdownList from './DropdownList';

const Dropdown = ({ children, onSelect, defaultSelected, placeholder }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames('form-dropdown', isOpen && 'rounded-b-none')}
        {...getToggleButtonProps()}
      >
        <span>{(selectedItem && selectedItem.label) || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <DropdownList {...{ onSelect, isOpen, getMenuProps, highlightedIndex, getItemProps }}>
        {children}
      </DropdownList>
    </div>
  );
};

export default Dropdown;
