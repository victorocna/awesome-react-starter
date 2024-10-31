import { useCombobox } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Combobox = ({ children, value, onChange, placeholder, disabled, icon }) => {
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
        {...downshift.getToggleButtonProps()}
      >
        <input
          value={downshift.selectedItem?.label || ''}
          className="-my-2 w-full bg-transparent outline-none"
          {...downshift.getInputProps()}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span className={classnames(disabled && 'pointer-events-none')}>
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>
      <OptionList {...downshift}>{inputItems}</OptionList>
    </div>
  );
};

export default Combobox;
