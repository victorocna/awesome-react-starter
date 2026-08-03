import { Button, Modal } from '@components';

/**
 * A confirmation dialog component asking the user if they are sure.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen Control open state of the confirmation dialog
 * @param {function} props.hide Callback function to close the dialog
 * @param {function} props.iAmSure Callback function to run when the user confirms
 * @param {React.ReactNode} props.children Message or description to display in the body
 */
const AreYouSure = ({ isOpen, hide, iAmSure, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      hide={hide}
      title="Confirm operation"
      footer={
        <div className="flex justify-end gap-2">
          <Button className="button square accent" onClick={hide}>
            Go back
          </Button>
          <Button className="button full primary" onClick={iAmSure}>
            Delete
          </Button>
        </div>
      }
    >
      {children}
    </Modal>
  );
};

export default AreYouSure;

