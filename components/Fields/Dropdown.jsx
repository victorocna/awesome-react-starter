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
          className="-my-2 w-full bg-transparent outline-none"
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          readOnly
          value={downshift.selectedItem?.label || ''}
        />
        <span role="button" className={classnames(disabled && 'pointer-events-none')}>
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>

      <OptionList items={inputItems} {...downshift} />
    </div>
  );
};

export default Dropdown;
