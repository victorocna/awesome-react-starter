import { useCombobox } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Combobox = ({ children, defaultSelected, placeholder, disabled, onSelect, icon }) => {
  const { inputItems, ...downshift } = useCombobox({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && inputItems.length && 'rounded-b-none',
          disabled && 'pointer-events-none bg-gray-200'
        )}
        {...downshift.getComboboxProps()}
      >
        <input
          value={downshift.selectedItem?.label || ''}
          className="-my-2 w-full bg-transparent outline-none"
          {...downshift.getInputProps()}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span
          role="button"
          {...downshift.getToggleButtonProps()}
          className={classnames(disabled && 'pointer-events-none')}
        >
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {inputItems}
      </OptionList>
    </div>
  );
};

export default Combobox;
