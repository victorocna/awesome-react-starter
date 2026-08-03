import { useChildren } from '@hooks';
import { classnames } from '@lib';
import { Select } from 'radix-ui';

/**
 * Custom Dropdown component built with Radix UI Select.
 * It translates standard option tag children to option items.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children Option element children
 * @param {boolean} [props.disabled] Whether the dropdown is disabled
 * @param {React.ReactNode} [props.icon] Custom dropdown arrow icon
 * @param {string} [props.id] Unique element ID
 * @param {function} [props.onChange] Callback when selection changes, receives value
 * @param {string} [props.placeholder] Placeholder text when no option is selected
 * @param {string} [props.value] The currently selected value
 */
const Dropdown = ({ children, disabled, icon, id, onChange, placeholder, value }) => {
  const items = useChildren(children);

  return (
    <Select.Root
      value={value !== undefined && value !== null ? String(value) : undefined}
      onValueChange={(val) => {
        if (onChange) {
          onChange(val);
        }
      }}
      disabled={disabled}
    >
      <Select.Trigger
        id={id}
        className={classnames(
          'dropdown flex items-center justify-between gap-2 text-left cursor-pointer outline-none transition',
          disabled && 'pointer-events-none bg-gray-200 opacity-60'
        )}
      >
        <span className="truncate">
          <Select.Value placeholder={placeholder} />
        </span>
        <Select.Icon asChild>
          <span className={classnames(disabled && 'pointer-events-none')}>
            {icon || <i className="fas fa-chevron-down" />}
          </span>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={0}
          className="z-50 max-h-80 bg-white border border-t-0 border-neutral-300 rounded-b-lg shadow-sm outline-none overflow-y-auto"
          style={{ width: 'var(--radix-select-trigger-width)' }}
        >
          <Select.Viewport className="p-0">
            {items.map((item) => (
              <Select.Item
                key={String(item.value)}
                value={String(item.value)}
                className="px-3 py-2 text-sm text-gray-800 cursor-pointer outline-none select-none hover:bg-gray-100 data-[highlighted]:bg-gray-100 data-[state=checked]:font-semibold data-[state=checked]:bg-gray-50 flex items-center justify-between"
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <i className="fas fa-check text-xs text-primary" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Dropdown;

