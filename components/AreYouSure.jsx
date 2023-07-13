import { Button } from '@components';
import { Modal } from 'react-bootstrap';

const AreYouSure = ({ isOpen, hide, iAmSure, children }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm operation</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button className="button square accent" onClick={hide}>
          Go back
        </Button>
        <Button className="button full primary" onClick={iAmSure}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AreYouSure;
