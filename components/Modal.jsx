import { Dialog } from 'radix-ui';

/**
 * Reusable modal dialog component built with Radix UI.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen Control open state of the modal
 * @param {string} props.title Title of the modal dialog
 * @param {React.ReactNode} props.children Children content of the modal body
 * @param {React.ReactNode} [props.footer] Optional footer content/actions
 * @param {function} [props.hide] Callback function to close the modal
 */
const Modal = ({ isOpen, title, children, footer, hide }) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open && hide) {
          hide();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-white p-4 text-sm text-gray-500 ring-1 ring-primary/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
          <Dialog.Title className="font-sans text-base leading-none font-medium">
            {title}
          </Dialog.Title>
          {children}
          {footer}
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2">
              <i className="fas fa-times"></i>
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

