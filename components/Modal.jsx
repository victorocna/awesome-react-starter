import { Modal } from 'react-bootstrap';

const Popup = ({ isOpen, hide, title, children, footer, modalProps }) => {
  return (
    <Modal backdrop="static" centered={true} show={isOpen} onHide={hide} {...modalProps}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default Popup;
