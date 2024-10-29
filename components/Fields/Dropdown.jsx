import { useDropdown } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Dropdown = ({ children, value, onChange, placeholder, disabled, icon }) => {
  const { inputItems, ...downshift } = useDropdown({ children, value, onChange });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && 'rounded-b-none',
          disabled && 'pointer-events-none bg-gray-200'
        )}
        {...downshift.getToggleButtonProps()}
      >
        <input
          value={downshift.selectedItem?.label || ''}
          className="-my-2 w-full bg-transparent outline-none"
          readOnly={true}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span role="button" className={classnames(disabled && 'pointer-events-none')}>
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>
      <OptionList {...downshift}>{inputItems}</OptionList>
    </div>
  );
};

export default Dropdown;
