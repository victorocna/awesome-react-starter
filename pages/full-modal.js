import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const FullscreenModalPage = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <div className="flex justify-center pt-10">
      <Button className="me-2" onClick={() => handleShow()}>
        Fullscreen Modal
      </Button>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </div>
  );
}

export default FullscreenModalPage;
