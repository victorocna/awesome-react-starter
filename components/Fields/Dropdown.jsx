import { useDropdown } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Dropdown = ({ children, disabled, icon, id, onChange, placeholder, value }) => {
  const { inputItems, ...downshift } = useDropdown({ children, id, onChange, value });

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
          id={id}
          value={downshift.selectedItem?.label || ''}
          className="-my-2 w-full bg-transparent outline-none"
          readOnly
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
