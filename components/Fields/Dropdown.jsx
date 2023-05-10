import { classnames } from '../../lib';
import { useSelect } from '../../hooks';
import { OptionList } from '.';

const Dropdown = ({ children, defaultSelected, placeholder = '', disabled, onSelect }) => {
  const { inputItems, ...downshift } = useSelect({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && 'rounded-b-none rounded-t-[20px]',
          disabled && 'bg-gray-200 pointer-events-none'
        )}
        {...downshift.getToggleButtonProps()}
      >
        <input
          value={!disabled ? downshift.selectedItem?.label || '' : ''}
          className="-my-2 outline-none w-full bg-transparent"
          readOnly={true}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {inputItems}
      </OptionList>
    </div>
  );
};

export default Dropdown;
