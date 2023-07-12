import { OptionList } from '.';
import { useDropdown } from '../../hooks';
import { classnames } from '../../lib';

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
          'bg-lightblue dropdown flex focus-within:ring-0 input items-center justify-center p-0',
          downshift.isOpen && 'rounded-b-none',
          disabled && 'bg-gray-200 pointer-events-none'
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
            className="bg-transparent border-0 cursor-pointer dropdown focus-within:ring-0 font-bold outline-none p-0 uppercase w-full"
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
