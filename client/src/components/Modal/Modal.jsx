import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';

const AgeCheck = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <Modal
      className="modal-popup"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      backdrop="static"
      onHide={handleClose}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ARE YOU OVER 21?!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You have to be over 21 years old to access to our site
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-button-yes"
          variant="success"
          onClick={handleClose}
        >
          Yes, I am
        </Button>
        <Button
          className="modal-button-no"
          variant="danger"
          onClick={handleClose}
        >
          <a
            style={{ color: 'white', textDecoration: 'none' }}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            No, I am not
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgeCheck;
