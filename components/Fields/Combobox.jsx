import { classnames } from '../../lib';
import { useChildren, useCombobox } from '../../hooks';
import OptionList from './OptionList';

const Combobox = ({ children, onSelect, defaultSelected }) => {
  const items = useChildren(children);
  const { inputItems, ...downshift } = useCombobox({ items, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'form-dropdown',
          downshift.isOpen && inputItems.length && 'rounded-b-none'
        )}
        {...downshift.getComboboxProps()}
      >
        <input
          className="-my-2 outline-none w-full bg-transparent"
          {...downshift.getInputProps()}
        />
        <span role="button" {...downshift.getToggleButtonProps()}>
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
