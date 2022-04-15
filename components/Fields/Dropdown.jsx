import { classnames } from '../../lib';
import { useChildren, useSelect } from '../../hooks';
import OptionList from './OptionList';

const Dropdown = ({ children, onSelect, defaultSelected, placeholder }) => {
  const items = useChildren(children);
  const downshift = useSelect({ items, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames('form-dropdown', downshift.isOpen && 'rounded-b-none')}
        {...downshift.getToggleButtonProps()}
      >
        <input
          value={downshift?.selectedItem?.label || placeholder}
          className="-my-2 outline-none w-full bg-transparent"
          readOnly={true}
        />
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {items}
      </OptionList>
    </div>
  );
};

export default Dropdown;
