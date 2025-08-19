import { useCombobox } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Combobox = ({ children, value, onChange, placeholder, disabled, icon, ...props }) => {
  const { inputItems, ...downshift } = useCombobox({ children, value, onChange });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && inputItems.length && 'rounded-b-none',
          disabled && 'pointer-events-none bg-gray-200'
        )}
        role="button"
        {...downshift.getComboboxProps()}
      >
        <input
          value={downshift.selectedItem?.label || ''}
          className="-my-2 w-full bg-transparent outline-none"
          {...downshift.getInputProps(props)}
          placeholder={placeholder}
          disabled={disabled}
        />
        <button
          type="button"
          className={classnames(disabled && 'pointer-events-none')}
          {...downshift.getToggleButtonProps()}
        >
          {icon || <i className="fas fa-chevron-down" />}
        </button>
      </div>
      <OptionList {...downshift}>{inputItems}</OptionList>
    </div>
  );
};

export default Combobox;
