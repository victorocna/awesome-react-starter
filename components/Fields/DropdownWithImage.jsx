import { useDropdown } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const DropdownWithImage = ({
  children,
  defaultSelected,
  disabled,
  icon,
  onSelect,
  placeholder,
  value,
}) => {
  const { inputItems, ...downshift } = useDropdown({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'bg-lightblue dropdown input flex items-center justify-center p-0 focus-within:ring-0',
          downshift.isOpen && 'rounded-b-none',
          disabled && 'pointer-events-none bg-gray-200'
        )}
        {...downshift.getToggleButtonProps()}
      >
        <div className="flex items-center justify-center" key={value}>
          <span className="flex w-full">
            <img
              alt={value}
              className="rounded-full"
              height="24px"
              src={`/flags/${value}.png`}
              width="24px"
            />
          </span>
          <input
            className="dropdown w-full cursor-pointer border-0 bg-transparent p-0 font-bold uppercase outline-none focus-within:ring-0"
            disabled={disabled}
            placeholder={placeholder}
            readOnly={true}
            value={value}
          />
        </div>
        <span role="button" className={classnames(disabled && 'pointer-events-none')}>
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {inputItems}
      </OptionList>
    </div>
  );
};

export default DropdownWithImage;
