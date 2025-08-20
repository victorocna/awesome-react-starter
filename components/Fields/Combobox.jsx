import { useCombobox } from '@hooks';
import { classnames } from '@lib';
import OptionList from './OptionList';

const Combobox = ({ children, disabled, icon, id, onChange, placeholder, value }) => {
  const { inputItems, ...downshift } = useCombobox({ children, id, onChange, value });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && inputItems.length > 0 && 'rounded-b-none',
          disabled && 'pointer-events-none bg-gray-200'
        )}
        {...downshift.getComboboxProps()}
      >
        <input
          className="-my-2 w-full bg-transparent outline-none"
          {...downshift.getInputProps({ id, placeholder, disabled })}
        />
        <button
          className={classnames(disabled && 'pointer-events-none')}
          type="button"
          {...downshift.getToggleButtonProps()}
        >
          {icon || <i className="fas fa-chevron-down" />}
        </button>
      </div>

      <OptionList items={inputItems} {...downshift} />
    </div>
  );
};

export default Combobox;
