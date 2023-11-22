import { useCombobox } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Combobox = ({
  children,
  defaultSelected,
  placeholder,
  disabled,
  onSelect,
  icon,
  status,
  ...props
}) => {
  const { inputItems, ...downshift } = useCombobox({ children, onSelect, defaultSelected, status });

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
          className="-my-2 w-full bg-transparent outline-none"
          {...downshift.getInputProps()}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
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
