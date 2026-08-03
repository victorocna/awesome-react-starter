import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { useChildren } from '@hooks';
import { classnames } from '@lib';

const Combobox = ({ children, disabled, id, onChange, placeholder, value }) => {
  const items = useChildren(children);

  return (
    <ComboboxPrimitive.Root
      items={items}
      value={value}
      onValueChange={onChange}
      disabled={disabled}
      itemToStringLabel={(item) => item.label || ''}
      id={id}
    >
      <ComboboxPrimitive.InputGroup
        className={(state) => {
          return classnames(
            'border rounded-md h-9 px-3 flex items-center gap-2 bg-white',
            state.open && 'rounded-b-none',
            disabled && 'pointer-events-none bg-gray-200'
          );
        }}
      >
        <ComboboxPrimitive.Input
          className="-my-2 w-full bg-transparent outline-none"
          placeholder={placeholder}
          id={id}
          disabled={disabled}
        />
        <ComboboxPrimitive.Trigger className={classnames(disabled && 'pointer-events-none')}>
          <i className="fas fa-chevron-down" />
        </ComboboxPrimitive.Trigger>
      </ComboboxPrimitive.InputGroup>

      <ComboboxPrimitive.Portal>
        <ComboboxPrimitive.Positioner sideOffset={0} align="start">
          <ComboboxPrimitive.Popup
            className="z-10 max-h-80 overflow-y-auto rounded-b-lg border border-t-0 border-neutral-300 bg-white shadow-sm outline-none p-0"
            style={{ width: 'var(--anchor-width)' }}
          >
            <ComboboxPrimitive.Empty className="text-center text-sm text-gray-400">
              <div className="flex w-full justify-center py-2">No items found.</div>
            </ComboboxPrimitive.Empty>
            <ComboboxPrimitive.List className="outline-none">
              {(item) => {
                return (
                  <ComboboxPrimitive.Item
                    key={item.value}
                    value={item}
                    className={(state) => {
                      return classnames(
                        'px-3 py-1 cursor-pointer outline-none select-none',
                        state.highlighted && 'bg-gray-200',
                        state.selected && 'font-medium',
                        state.disabled && 'pointer-events-none opacity-50'
                      );
                    }}
                  >
                    {item.label}
                  </ComboboxPrimitive.Item>
                );
              }}
            </ComboboxPrimitive.List>
          </ComboboxPrimitive.Popup>
        </ComboboxPrimitive.Positioner>
      </ComboboxPrimitive.Portal>
    </ComboboxPrimitive.Root>
  );
};

export default Combobox;
