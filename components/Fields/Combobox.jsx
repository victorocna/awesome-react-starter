import { classnames } from '../../lib';
import { useCombobox } from '../../hooks';
import { OptionList } from '.';

const Combobox = ({
  children,
  defaultSelected,
  placeholder = '',
  disabled,
  onSelect,
  ...props
}) => {
  const { inputItems, ...downshift } = useCombobox({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && inputItems.length && 'rounded-b-none rounded-b-none',
          disabled && 'bg-gray-200'
        )}
        {...downshift.getComboboxProps()}
      >
        <input
          className="-my-2 outline-none w-full bg-transparent"
          {...downshift.getInputProps()}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        <span
          role="button"
          {...downshift.getToggleButtonProps()}
          className={disabled ? 'pointer-events-none' : ''}
        >
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {inputItems}
      </OptionList>
    </div>
  );
};

export default Combobox;
