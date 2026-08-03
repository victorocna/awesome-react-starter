import { Tooltip as TooltipPrimitive } from 'radix-ui';

/**
 * A tooltip component displaying short help or context on hover.
 *
 * @param {Object} props
 * @param {string} [props.icon] FontAwesome icon class
 * @param {'top'|'right'|'bottom'|'left'} [props.placement] Placement of the tooltip content relative to the trigger
 * @param {React.ReactNode} props.children Tooltip body text or content
 */
const Tooltip = ({ icon = 'fas fa-question-circle', placement = 'top', children }) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <div className="flex h-8 w-8 items-center justify-center text-accent cursor-pointer">
            <i className={icon}></i>
          </div>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placement}
            sideOffset={4}
            className="z-50 max-w-xs rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          >
            {children}
            <TooltipPrimitive.Arrow className="fill-neutral-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;

